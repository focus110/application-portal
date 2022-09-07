const express = require("express");
const router = express.Router();
const { authUser } = require("../middleware/jwt");
const {
  uploadAvatar,
  deleteAvatar,
  fetchAvatar,
} = require("../controllers/avatarController");

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

// @route POST api/avatar
// @desc  upload avatar
// @access Private
router.post(
  "/",
  [authUser],
  upload.single("upload"),
  uploadAvatar,
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// @route FETCH api/avatar
// @desc  get passport
// @access Private
router.get("/", [authUser], fetchAvatar);

// @route DELETE api/avatar
// @desc  delete avatar
// @access Private
router.delete("/:id", [authUser], deleteAvatar);

module.exports = router;
