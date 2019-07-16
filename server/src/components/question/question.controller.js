const QuestionModel = require('./models/question.model');

/**
 * @api {get} /question/:id Get a question and it options
 * @apiVersion 1.0.0
 * @apiName get a question and it options
 * @apiGroup Question
 * @apiError 400 Bad request
 * @apiError 401 Unauthorised
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
*/
const getQuestion = async (req, res, next) => {
  const questions = [
    { question: 'Are you afraid of the dark?' },
    { question: 'What do you prefer?' },
    { question: 'Are you a monster day or a night monster?' },
    { question: `You'd rather be a bad or a good monster?` },
  ];
  const newQuestions = new QuestionModel();
  const qa = await newQuestions.save();
  // const qa = await QuestionModel.destroy({ where: { id: 2 }})
  // const qa = await QuestionModel.findAll()
  return res.send({ success: true, questions: qa });
};

module.exports = {
  getQuestion,
};
