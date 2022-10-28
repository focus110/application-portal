const router = require("express").Router();
const { authUser, isAdmin } = require("../middleware/jwt");
const { body, validationResult } = require("express-validator");
const {
  uploadResult,
  fetchResult,
  updateResult,
  deleteResult,
} = require("../controllers/JambResultController");

// @route POST api/olevel
// @desc  Upload user result
// @access Private
router.post("/", uploadResult);

// @route GET api/olevel
// @desc  Get user result
// @access Private
router.get("/", fetchResult);

// @route PUT api/olevel
// @desc  Update user result
// @access Private
router.put("/", updateResult);

// @route PUT api/olevel/:id
// @desc  Delete user result
// @access Private
router.delete("/:id", deleteResult);

module.exports = router;
