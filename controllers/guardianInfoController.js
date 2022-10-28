const response = require("../middleware/response");
const User = require("../models/User");
const GuardianInfo = require("../models/GuardianInfo");
const dotenv = require("dotenv");
const { validationResult, param } = require("express-validator");

dotenv.config();

class guardianInfoController {
  // post guardianInfo
  static async uploadGuardianInfo(req, res) {
    // validate email
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      const id = req.user.id;

      const { firstname, lastname, middlename, gender, email, phone, address } =
        req.body;

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

      const guardianInfoExists = await GuardianInfo.findOne({
        where: {
          foreign_key: id,
        },
      });

      if (guardianInfoExists) {
        return res
          .status(404)
          .send(response("info already registered", {}, false));
      }

      // check if input is empty
      if (
        !firstname ||
        !lastname ||
        !middlename ||
        !gender ||
        !email ||
        !phone ||
        !address
      ) {
        return res.status(400).send({
          message: "Fill all fields",
        });
      }

      // Check if email already exists
      const emailExists = await GuardianInfo.findOne({
        where: { email },
      });

      if (emailExists)
        return res
          .status(500)
          .send(response("email has already been used", {}, false));

      const guardianInfo = await GuardianInfo.create({
        firstname,
        lastname,
        middlename,
        gender,
        email,
        phone,
        home_address: address,
        foreign_key: id,
      });

      res.send(
        response("GuardianInfo was created successfully", { guardianInfo })
      );
    } catch (err) {
      res.status(500).send("server error");
    }
  }

  // update guardianInfo
  static async updateGuardianInfo(req, res) {
    try {
      const id = req.user.id;

      const { firstname, lastname, middlename, gender, email, phone, address } =
        req.body;

      // Build payload object
      const payload = {};
      if (firstname) payload.firstname = firstname;
      if (middlename) payload.middlename = middlename;
      if (lastname) payload.lastname = lastname;
      if (email) payload.email = email;
      if (phone) payload.phone = phone;
      if (gender) payload.gender = gender;
      if (address) payload.home_address = address;

      // Check if email already exists
      if (email) {
        const emailExists = await GuardianInfo.findOne({
          where: { email },
        });

        if (emailExists)
          return res
            .status(500)
            .send(response("email has already been used", {}, false));
      }

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

      // update GuardianInfo
      const guardianInfo = await GuardianInfo.update(payload, {
        where: { foreign_key: id },
      });

      if (!guardianInfo) {
        return res
          .status(500)
          .send(response("The user can not be updated", {}, false));
      }

      return res.send(
        response("GuardianInfo was successfully updated", guardianInfo)
      );
    } catch (err) {
      res.status(500).send("server error");
    }
  }

  // fetch guardianInfo
  static async fetchGuardianInfo(req, res) {
    try {
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
          .send(response(" User with the given ID does not exists", {}, false));

      // find GuardianInfo in db
      const guardianInfo = await GuardianInfo.findOne({
        where: { foreign_key: id },
      });

      if (!guardianInfo) {
        return res
          .status(500)
          .send(response("The user can not be updated", {}, false));
      }

      res.send(response("Fetched user successfully", guardianInfo));
    } catch (err) {
      res.status(500).send("server error");
    }
  }

  // delete guardianInfo
  static async deleteGuardianInfo(req, res) {
    try {
      res.send("delete route");
    } catch (err) {
      res.status(500).send("server error");
    }
  }
}

module.exports = guardianInfoController;
