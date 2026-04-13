const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Project = sequelize.define('Project', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  requiredSkills: { type: DataTypes.STRING }, // e.g., "React, Node, SQL"
  status: { type: DataTypes.ENUM('open', 'filled'), defaultValue: 'open' },
  creatorId: { type: DataTypes.INTEGER, allowNull: false } // Links to the User who made it
});

module.exports = Project;

/////
