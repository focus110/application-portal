const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { authUser, isAdmin } = require("../middleware/jwt");
const {
  listUsers,
  updateUserById,
  loginUser,
  deleteUserById,
  getUser,
  uploadUserPassport,
  deleteUserPassport,
  fetchUserPassport,
} = require("../controllers/userController");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      return cb(new Error("Please upload a jpg or png"));
    }

    cb(undefined, true);
  },
  storage: storage,
});

// @route GET api/auth
// @desc  Get logged in User // fetch user by id*
// @access Private
router.get("/", [authUser], getUser);

// @route GET api/auth
// @desc Fetch all users*
// @access Private
router.get("/users", [authUser, isAdmin], listUsers);

// @route POST api/auth
// @desc  Auth/Login user & get token
// @access Public
router.post(
  "/",
  [
    body("email", "Please include a valid credential").isEmail(),
    body("email", "Please include a valid credential").exists(),
  ],
  loginUser
);

// @route PUT api/auth
// @desc  Update user*
// @access Private
router.put("/", [authUser], updateUserById);

// @route POST api/auth/passport
// @desc  upload passport
// @access Private
router.post(
  "/passport",
  [authUser],
  upload.single("upload"),
  uploadUserPassport,
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// @route DELETE api/auth/passport
// @desc  delete passport
// @access Private
router.delete("/passport", [authUser], deleteUserPassport);

// @route FETCH api/auth/passport
// @desc  get passport
// @access Private
router.get("/passport/:id", fetchUserPassport);

// @route DELETE api/auth
// @desc  Delete user account
// @access Private
router.delete("/", [authUser], deleteUserById);

module.exports = router;
