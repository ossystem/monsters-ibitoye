const QuestionModel = require('./models/question.model');
const QuestionOptionModel = require('../question_option/models/question_option.model');

const getQuestion = async id => {
  return QuestionModel.findOne({
    where: { id },
    include: [
      { 
        model: QuestionOptionModel, 
        as: 'options',
        where: { chosenBy: null }
      }
    ]
  });
};

const getQuestionOption = async id => {
  return QuestionOptionModel.findOne({
    where: { id }
  });
};

const insertAnswer = async answer => {
  const newAnswer = new QuestionOptionModel(answer);

  return newAnswer.save();
};

module.exports = {
  getQuestion,
  getQuestionOption,
  insertAnswer,
}
