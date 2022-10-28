const response = require("../middleware/response");
const User = require("../models/User");
const OlevelResult = require("../models/Olevel_Result");
const dotenv = require("dotenv");
const { validationResult, param } = require("express-validator");

dotenv.config();

class olevelController {
  // post result
  static async uploadResult(req, res) {}

  // fetch result
  static async fetchResult(req, res) {}

  // update result
  static async updateResult(req, res) {}

  // delete result
  static async deleteResult(req, res) {}
}

module.exports = olevelController;
