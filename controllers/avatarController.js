const response = require("../middleware/response");
const User = require("../models/User");
const Avatar = require("../models/Avatar");
const crypto = require("crypto");
const sharp = require("sharp");
const dotenv = require("dotenv");

dotenv.config();

const randImgName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex");

// s3 setup
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey,
  },
  region: bucketRegion,
});

class AvatarController {
  // upload avatar
  static async uploadAvatar(req, res) {
    try {
      const buffer = req.file.buffer;
      const id = req.user.id;

      // find the id in database
      const user = await User.findOne({
        where: {
          id,
        },
      });

      // // if id do not exist print error message
      if (!user)
        return res
          .status(500)
          .send(response("User with the given ID does not exists", {}, false));

      // check if user have avatar
      const avatar = await Avatar.findOne({
        where: { foreign_key: id },
      });

      // // if user have avatar do not upload
      if (avatar)
        return res
          .status(500)
          .send(response("delete current avatar before upload", {}, false));

      const buffer_ = await sharp(buffer)
        .resize({ height: 500, width: 500 })
        .toBuffer();

      const params = {
        Bucket: bucketName,
        Key: randImgName(),
        Body: buffer_,
        ContentType: req.file.mimetype,
      };

      const command = new PutObjectCommand(params);

      await s3.send(command, (err, data) => {
        // console.log(err);
      });

      // save image Id
      await Avatar.create({
        avatar: params.Key,
        foreign_key: user.id,
      });

      res.send("uploaded successfully");
    } catch (error) {
      res.status(404).send();
    }
  }

  // fetch avatar
  static async fetchAvatar(req, res) {
    try {
      const id = req.user.id;

      const user = await User.findOne({
        where: {
          id,
        },
      });

      if (!user) {
        return res.status(404).send(response("Faild to fetch user", {}, false));
      }

      if (user.accountStatus === "notActive") {
        return res.status(404).send(response("Invalid Credentials", {}, false));
      }

      const avatar = await Avatar.findOne({
        where: { foreign_key: id },
      });

      const getObjectParams = {
        Bucket: bucketName,
        Key: avatar.avatar,
      };

      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 60 });

      res.send({ imgUrl: url });
    } catch (error) {
      console.log(error);
      res.status(404).send(error);
    }
  }

  // delete avatar
  static async deleteAvatar(req, res) {
    try {
      const params = req.params.id;
      const id = req.user.id;

      // find the id in database
      const user = await User.findOne({
        where: {
          id,
        },
      });

      // if id do not exist print error message
      if (!user)
        return res
          .status(500)
          .send(response("User with the given ID does not exists", {}, false));

      // check if avatar is in db
      const avatar = await Avatar.findOne({
        where: {
          id: params,
          foreign_key: id,
        },
      });

      if (!avatar)
        return res.status(500).send(response("upload avatar", {}, false));

      const getObjectParams = {
        Bucket: bucketName,
        Key: avatar.avatar,
      };

      // delete image from s3 bucket
      const command = new DeleteObjectCommand(getObjectParams);
      await s3.send(command, (err, data) => {});

      await avatar.destroy(); // delete avatar from db

      res.send({});
    } catch (error) {
      res.status(404).send();
    }
  }
}

module.exports = AvatarController;
