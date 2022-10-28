const express = require("express");
const router = express.Router();
const { authUser } = require("../middleware/jwt");
const crypto = require("crypto");
const sharp = require("sharp");

const {
  uploadAvatar,
  deleteAvatar,
  fetchAvatar,
} = require("../controllers/avatarController");

const randImgName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];

    cb(null, randImgName() + `.${ext}`);
  },
});

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      return cb(new Error("Please upload a valid image"));
    }

    cb(undefined, true);
  },
  storage: storage,
});

// @route POST api/avatar
// @desc  upload avatar
// @access Private
router.post(
  "/",
  [authUser],
  upload.single("upload"),
  uploadAvatar,
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// @route FETCH api/avatar
// @desc get avatar
// @access Private
router.get("/", [authUser], fetchAvatar);

// @route DELETE api/avatar
// @desc  delete avatar
// @access Private
router.delete("/:id", [authUser], deleteAvatar);

module.exports = router;
