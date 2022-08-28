const router = require("express").Router();
const { authUser, isAdmin } = require("../middleware/jwt");
const { body, validationResult } = require("express-validator");
const Course = require("../models/Course");
const User = require("../models/User");

// @route GET api/course[GOOD]
// @desc  Get all users course
// @access Private
router.get("/", async (req, res) => {
  try {
    const course = await Course.findAll({});

    if (!course) {
      return res.status(404).send(response("Faild to fetch course", {}, false));
    }

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route POST api/contacts[GOOD]
// @desc  Add new course
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
  async (req, res) => {
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
);

// @route PUT api/course/:
// @desc  Update contact
// @access Private
// router.put("/:id", auth, async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty())
//     return res.status(400).json({ errors: errors.array() });

//   const { name, email, phone, type } = req.body;

//   // Build contact object
//   const contactFields = {};
//   if (name) contactFields.name = name;
//   if (email) contactFields.email = email;
//   if (phone) contactFields.phone = phone;
//   if (type) contactFields.type = type;

//   try {
//     let contact = await Contact.findById(req.params.id);

//     if (!contact) return res.status(404).json({ msg: "Contact not found" });

//     // Make sure user owns contact
//     if (contact.user.toString() !== req.user.id)
//       return res.status(401).json({ msg: "Not authorized" });

//     contact = await Contact.findByIdAndUpdate(
//       req.params.id,
//       { $set: contactFields },
//       { new: true }
//     );

//     res.json(contact);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// });

// @route Delete api/contacts/:
// @desc  Delete contact
// @access Private
// router.delete("/:id", auth, async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);

//     if (!contact) return res.status(404).json({ msg: "Contact not found" });

//     // Make sure user owns contact
//     if (contact.user.toString() !== req.user.id)
//       return res.status(401).json({ msg: "Not authorized" });

//     await Contact.findByIdAndRemove(req.params.id);

//     res.json({ msg: "Contact removed" });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("server error");
//   }
// });

module.exports = router;
