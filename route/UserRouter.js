const express = require('express');

const UserController = require('../Controllers/UserController');

const router = express.Router();

router.post('/', UserController.add_a_user);
router.post('/login', UserController.login);
router.post('/finduser', UserController.findUser);
router.post('/finduserbyid', UserController.findUserbyID);
router.post('/addEmployee', UserController.addusertocaompany);
module.exports = router;