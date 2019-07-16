const router = require('express').Router();

const AnswerController = require('./answer.controller');

router.post('/', AnswerController.submit);

module.exports = router;
