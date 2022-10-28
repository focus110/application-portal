const router = require("express").Router();
const { authUser, isAdmin } = require("../middleware/jwt");
const { body, validationResult } = require("express-validator");
const {
  uploadResult,
  fetchResult,
  updateResult,
  deleteResult,
} = require("../controllers/JambResultController");

// @route POST api/jamb-result
// @desc  Post user result
// @access Private
router.post(
  "/",
  [
    authUser,
    [
      body("jamb_Reg_Number", "jamb_Reg_Number is required").not().isEmpty(),
      body("jamb_Year", "Jamb_Year is required").not().isEmpty(),
      body("subject", "subject is required").not().isEmpty(),
      body("score", "Score should be not more than 100")
        .not()
        .isEmpty()
        .isLength({ max: 3 }),
    ],
  ],
  uploadResult
);

// @route GET api/jamb-result
// @desc  Get user result
// @access Private
router.get("/", [authUser], fetchResult);

// @route PUT api/jamb-result
// @desc  Put user result
// @access Private
router.put("/:id", [authUser], updateResult);

// @route PUT api/jamb-result
// @desc  Delete user result
// @access Private
router.delete("/:id", [authUser], deleteResult);

module.exports = router;
