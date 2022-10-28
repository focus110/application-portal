const response = require("../middleware/response");
const User = require("../models/User");
const Course = require("../models/Course");
const dotenv = require("dotenv");
const { validationResult, param } = require("express-validator");

dotenv.config();

class guardianInfoController {
  // Get all user course
  static async fetchUserCourse(req, res) {
    try {
      const id = req.user.id;
      const course = await Course.findAll({ where: { user: id } });

      if (!course) {
        return res
          .status(404)
          .send(response("Faild to fetch course", {}, false));
      }

      res.send(course);
    } catch (err) {
      res.status(500).send("server error");
    }
  }

  // Add new course
  static async addCourse(req, res) {
    // Check for validation error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Get the fields value form request dot body
      const { course_code, course_title, units, servicing_dept } = req.body;

      // Check if fields are empty

      const payload = {
        course_code,
        course_title,
        units,
        servicing_dept,
        user: req.user.id,
      };

      const course = await Course.create(payload);

      res.json(course);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }

  // delete a course
  static async deleteCourse(req, res) {
    try {
      const id = req.params.id;

      const course = await Course.findOne({ where: { id } });

      if (!course) return res.status(404).json({ msg: "Course not found" });

      // Make sure user owns contact
      if (course.user.toString() !== req.user.id)
        return res.status(401).json({ msg: "Not authorized" });

      await course.destroy(); // delete avatar from db

      res.send("Course successfully deleted");
    } catch (err) {
      res.status(500).send("server error");
    }
  }
}

module.exports = guardianInfoController;
