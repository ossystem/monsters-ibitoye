const router = require('express').Router();

const UserController = require('./user.controller');

router.get('/', UserController.getUsers);

module.exports = router;
