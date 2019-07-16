const router = require('express').Router();

const QuestionController = require('./question.controller');

router.get('/:id', QuestionController.getQuestion);

module.exports = router;
