const db = require("../db/db");
const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const UserOTP = require("./UserOTP");

const User = db.define("users", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: function () {
      return uuidv4();
    },
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  // BREAK
  religion: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  dob: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  home_address: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  // BREAK
  nationality: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  state_of_origin: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  local_gov: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  // BREAK
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "student",
  },
  accountStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "active",
  },
  admissionStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "not admitted",
  },
  verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: false,
  },
  paymentStatus: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "pending",
  },
  program: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  // BREAK GUARDIAN

  // BREAK
  guardian_fname: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  guardian_lname: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  guardian_mname: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  guardian_home_address: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  guardian_telephone: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  //
  course_of_study: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  nd: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  matric_no: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  olevel_result: {
    type: Sequelize.JSON,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  school: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  // ACADEMIC RECORDS
  courses: {
    type: Sequelize.JSON,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  // MEDICAL REPORT
  medical_report: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },

  signature: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
});

User.hasMany(UserOTP, {
  foreignKey: "userID",
  as: "users_otp",
});

module.exports = User;
