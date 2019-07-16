const router = require('express').Router();

const UserController = require('./user.controller');

router.get('/', UserController.getUsers);

router.put('/completed', UserController.userCompleted);

module.exports = router;
