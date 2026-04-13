const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/users
const registerUser = async (req, res) => {
  const { name, email, role, skills, bio } = req.body;
  const user = await User.create({ name, email, role, skills, bio });
  res.status(201).json(user);
};

// @desc    Find users by skill (Discovery Logic)
// @route   GET /api/users/search?skill=python
const getUsersBySkill = async (req, res) => {
  const skill = req.query.skill;
  const users = await User.find({ skills: { $regex: skill, $options: 'i' } });
  res.json(users);
};

module.exports = { registerUser, getUsersBySkill };