const response = require("../middleware/response");
const User = require("../models/User");
const JambResult = require("../models/Jamb_Result");
const dotenv = require("dotenv");
const { validationResult, param } = require("express-validator");

dotenv.config();

class JambResultController {
  // upload result
  static async uploadResult(req, res) {
    const errors = validationResult(req);

    // if (!errors.isEmpty())
    //   return res.status(400).json({ errors: errors.array() });

    try {
      const id = req.user.id;

      let result = [];

      for (let i = 0; i < req.body.length; i++) {
        const { jamb_Reg_Number, jamb_Year, subject, score } = req.body[i];
        console.log(req.body[i]);

        const payload = {
          jamb_Reg_Number,
          jamb_Year,
          subject,
          score,
          foreign_key: id,
        };

        // check if subject already exist
        const subjectExists = await JambResult.findOne({ where: { subject } });

        if (subjectExists)
          return res.status(400).json("Subject already exists");

        r = await JambResult.create(payload);

        result.push(r);
      }

      res.send(response("uploaded successfully", { result }));
    } catch (err) {
      console.log(err);
      res.status(500).send("server error");
    }
  }

  // fetch result
  static async fetchResult(req, res) {
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

      const result = await JambResult.findAll({
        where: {
          foreign_key: id,
        },
      });

      if (!result) {
        return res
          .status(404)
          .send(response("Faild to fetch result", {}, false));
      }

      res.send(response("uploaded successfully", { result }));
    } catch (err) {
      res.status(500).send("server error");
    }
  }

  // update result
  static async updateResult(req, res) {
    try {
      // const id = req.user.id;
      const id_ = req.params.id;

      const { subject, score } = req.body;

      // find the id in database
      const userExists = await User.findOne({
        where: {
          id: req.user.id,
        },
      });

      // if id do not exist print error message
      if (!userExists)
        return res
          .status(500)
          .send(response("User with the given ID does not exists", {}, false));

      const payload = {};
      if (subject) payload.subject = subject;
      if (score) payload.score = score;

      const result = await JambResult.update(payload, { where: { id: id_ } });

      if (!result) {
        return res
          .status(500)
          .send(response("The result can not be updated", {}, false));
      }

      res.send(response("User was successfully updated", result));
    } catch (err) {
      res.status(500).send("server error");
    }
  }

  // delete subject
  static async deleteResult(req, res) {
    try {
      const id = req.params.id;

      const subject = await JambResult.findOne({ where: { id } });

      if (!subject) return res.status(404).json({ msg: "Subject not found" });

      // Make sure user owns contact
      if (subject.foreign_key.toString() !== req.user.id)
        return res.status(401).json({ msg: "Not authorized" });

      await subject.destroy(); // delete row from db

      res.send(response("deleted successfully", {}));
    } catch (err) {
      res.status(500).send("server error");
    }
  }
}

module.exports = JambResultController;
