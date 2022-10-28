const router = require("express").Router();
const { authUser, isAdmin } = require("../middleware/jwt");
const { body, validationResult } = require("express-validator");
const {
  fetchUserCourse,
  addCourse,
  deleteCourse,
} = require("../controllers/courseController");

// @route GET api/course[GOOD]
// @desc  Get all users course
// @access Private
router.get("/", [authUser], fetchUserCourse);

// @route POST api/contacts[GOOD]
// @desc Add new course
// @access Private
router.post(
  "/",
  [
    authUser,
    [
      body("course_code", "Course code is required").not().isEmpty(),
      body("course_title", "Course title is required").not().isEmpty(),
      body("units", "Course unit is required").not().isEmpty(),
      body("servicing_dept", "Course servicing dept is required")
        .not()
        .isEmpty(),
    ],
  ],
  addCourse
);

// @route Delete api/contacts/:
// @desc  Delete contact
// @access Private
router.delete("/:id", [authUser], deleteCourse);

module.exports = router;
