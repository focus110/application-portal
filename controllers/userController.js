const response = require("../middleware/response");
const User = require("../models/User");
const UserOTP = require("../models/UserOTP");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const multer = require("multer");

// nodemailer
const nodemailer = require("nodemailer");

// Config import
const { secret } = require("../config/dbConfig");
const { validationResult } = require("express-validator");

class UserController {
  // GET ALL USERS
  static async listUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes: { exclude: ["password"] },
      });

      const userOtp = await UserOTP.findAll({});

      if (!users) {
        return res
          .status(404)
          .send(response("Faild to fetch users", {}, false));
      }

      res.send(response("Fetched users successfully", users));
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }

  // FETCH USER BY ID
  static async getUser(req, res) {
    try {
      const id = req.user.id;

      const user = await User.findOne({
        attributes: { exclude: ["password"] },
        where: { id },
      });

      if (!user) {
        return res.status(404).send(response("Faild to fetch user", {}, false));
      }

      if (user.accountStatus === "notActive") {
        return res.status(404).send(response("Invalid Credentials", {}, false));
      }

      res.send(response("Fetched user successfully", user));
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }

  // REGISTER USER
  static async createUser(req, res) {
    // validate email
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      const { firstname, lastname, username, gender, phone, email, password } =
        req.body;

      // check if input is empty
      if (
        !firstname ||
        !lastname ||
        !username ||
        !gender ||
        !phone ||
        !email ||
        !password
      ) {
        return res.status(400).send({
          message: "Fill all fields",
        });
      }

      // Check if username already exists
      const usernameExists = await User.findOne({
        where: { username },
      });

      if (usernameExists)
        return res
          .status(500)
          .send(
            response(" User with the given username already exists", {}, false)
          );

      // Check if email already exists
      const emailExists = await User.findOne({
        where: { email },
      });

      if (emailExists)
        return res
          .status(500)
          .send(
            response(" User with the given email already exists", {}, false)
          );

      // save User in the database
      const user = await User.create({
        firstname: firstname,
        lastname: lastname,
        username: username,
        gender: gender,
        phone: phone,
        email: email,
        password: bcrypt.hashSync(password, 10),
      });

      if (!user) {
        return res
          .status(500)
          .send(response("The user can not be created", {}, false));
      }

      const payload = {
        id: user.id,
        role: user.role,
      };
      const token = jwt.sign(payload, secret, { expiresIn: "1d" });

      const { id } = user;

      const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

      const hashedOTP = await bcrypt.hash(otp, 10);

      // save users OTP
      const userOTPS = await UserOTP.create({
        foreign_key: id,
        otp: hashedOTP,
      });

      // create reusable transporter object using the default SMTP transport
      // let transporter = nodemailer.createTransport({
      //   host: "smtp.mailgun.org",
      //   port: 587,

      //   auth: {
      //     user: "postmaster@sandbox6562ae11c4ee47cbabc0e4d7605c0aa1.mailgun.org",
      //     pass: "65ee7262473022e7dd1d5673f3f2b2b5-5e7fba0f-7c47c542",
      //   },
      // });

      // let mailOptions = {
      //   from: `"Fred Foo 👻" th894hru9b49br@gmail.com`, // sender address
      //   to: `${email},`, // list of receivers
      //   subject: "Hello ✔", // Subject line
      //   text: `Otp ${otp}`, // plain text body
      //   html: `<b>${otp}</b>`, // html body
      // };

      // // send mail with defined transport object
      // transporter.sendMail(mailOptions, function (e, info) {
      //   if (e) console.log(e);
      //   if (!e) console.log("Message sent: %s", info.messageId);
      // });

      res.send(
        response("User was created successfully", { user, token, userOTPS })
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }

  // UPDATE USER BY ID
  static async updateUserById(req, res) {
    const file = req.file;

    try {
      const { profileImage, username, phone, password, courses, olevel } =
        req.body;
      const id = req.user.id;

      // find the id in database
      const userExists = await User.findOne({
        where: {
          id,
        },
      });

      // if id do not exist print error message
      if (!userExists)
        return res
          .status(500)
          .send(response(" User with the given ID does not exists", {}, false));

      // check if phone is verified

      // check if email is verified

      // if password is provided then bcrypt password
      password ? (password = bcrypt.hashSync(password, 10)) : null;

      // update user username, email, phone, password
      const user = await User.update(
        {
          profileImage: profileImage,
          username: username,
          courses: courses,
          olevel_result: olevel,
          password: password,
        },
        { where: { id: id } }
      );

      if (!user) {
        return res
          .status(500)
          .send(response("The user can not be updated", {}, false));
      }

      return res.send(response("User was successfully updated", user));
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }

  // LOGIN USER
  static async loginUser(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      // check if user exit
      if (!user) {
        return res.status(404).send(response("Invalid Credentials", {}, false));
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      // check if password match
      if (!isMatch) {
        return res.status(403).send(response("invalid credentials", {}, false));
      }

      const payload = {
        id: user.id,
        role: user.role,
      };
      const token = jwt.sign(payload, secret, { expiresIn: "1d" });

      return res.send(
        response("Login successful", {
          token: token,
        })
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }

  // Here we are not deleting the actual user but we are changing the accountStatus field of the user from active to notActive
  static async deleteUserById(req, res) {
    try {
      const id = req.user.id;

      const userExists = await User.findOne({ where: { id } });

      if (!userExists) {
        return res.status(404).send(response("Invalid Credentials", {}, false));
      }

      const user = await User.update(
        {
          accountStatus: "notActive",
        },
        { where: { id } }
      );

      if (!user)
        return res
          .status(500)
          .send(response(" User can not be deleted ", {}, false));

      return res.send(response("User was successfully deleted", user));
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }

  static async resetPwd(req, res) {
    if (true) {
      return res.status(500).send(response("Password reset failed", {}, false));
    }
    try {
      const { email, password } = req.body;

      // check if user exit
      const userExists = await User.findOne({
        where: {
          email,
        },
      });

      // if id do not exist print error message
      if (!userExists)
        return res
          .status(500)
          .send(response(" User with the given ID does not exists", {}, false));

      // check if user is verified

      // if password is provided then bcrypt password
      password ? (password = bcrypt.hashSync(password, 10)) : null;

      // update user username, email, phone, password
      const user = await User.update(
        {
          password: password,
        },
        { where: { id: id } }
      );

      if (!user) {
        return res
          .status(500)
          .send(response("The user can not be updated", {}, false));
      }

      return res.send(response("User was successfully updated", user));
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
}

module.exports = UserController;
