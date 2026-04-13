const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  role: { type: DataTypes.ENUM('student', 'professor'), allowNull: false },
  skills: { type: DataTypes.TEXT }, // In MySQL, we store arrays as strings or in a separate table
  bio: { type: DataTypes.TEXT }
});

module.exports = User;