const router = require("express").Router();
const { authUser, isAdmin } = require("../middleware/jwt");
const { body, validationResult } = require("express-validator");
const GuardianInfo = require("../models/GuardianInfo");
const User = require("../models/User");
const { check } = require("express-validator");
const {
  uploadGuardianInfo,
  updateGuardianInfo,
  fetchGuardianInfo,
  deleteGuardianInfo,
} = require("../controllers/guardianInfoController");

// @route Post api/guardianInfo
// @desc Post Guardian info
// @access Private
router.post(
  "/",
  [authUser],
  [check("email", "Provide a valid email").isEmail()],
  uploadGuardianInfo
);

// @route Put api/guardianInfo
// @desc Put Guardian info
// @access Private
router.put(
  "/",
  [authUser],
  [check("email", "Provide a valid email").isEmail()],
  updateGuardianInfo
);

// @route Get api/guardianInfo
// @desc Get Guardian info
// @access Private
router.get("/", [authUser], fetchGuardianInfo);

// @route Delete api/guardianInfo/:id
// @desc Delete Guardian info
// @access Private
router.delete("/:id", [authUser], deleteGuardianInfo);

module.exports = router;
