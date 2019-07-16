const QuestionModel = require('./models/question.model');
const QuestionOptionModel = require('../question_option/models/question_option.model');

const getQuestion = async id => {
  return QuestionModel.findOne({
    where: { id },
    include: [
      { model: QuestionOptionModel, as: 'questions' }
    ]
  });
};

module.exports = {
  getQuestion,
}
