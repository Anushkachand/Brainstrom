const express = require('express');
const router = express.Router();
const { registerUser, getUsersBySkill } = require('../controllers/userController');

router.post('/', registerUser);
router.get('/search', getUsersBySkill);

module.exports = router;