const router = require('express').Router();

const QuestionController = require('./question.controller');

router.get('/:id', QuestionController.getQuestion);

router.post('/submit', QuestionController.submit);

module.exports = router;
