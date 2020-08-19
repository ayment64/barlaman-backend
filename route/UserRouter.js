const express = require('express');

const UserController = require('../Controllers/UserController');

const router = express.Router();

router.post('/', UserController.add_a_user);
router.post('/login', UserController.login);
module.exports = router;