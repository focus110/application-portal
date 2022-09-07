const db = require("../db/db");
const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const User = require("./User");

const Avatar = db.define("avatar", {
  id: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: function () {
      return uuidv4();
    },
    primaryKey: true,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
  },
  foreign_key: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true,
    },
    defaultValue: "",
  },
});

Avatar.associate = (models) => {
  Avatar.belongsTo(User, {
    foreignKey: "userID",
    as: "user",
  });
};

module.exports = Avatar;
