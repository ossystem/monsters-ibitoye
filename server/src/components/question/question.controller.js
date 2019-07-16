const QuestionService = require('./question.service');
const { BadRequest } = require('../../errors');
const UserService = require('../user/user.service');

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
  try {
    const { params: { id } } = req;

    const questions = await QuestionService.getQuestion(parseInt(id));

    return res.send({ success: true, questions });
  } catch (error) {
    next(error);
  }
};

/**
 * @api {post} /question Submit an answer to a question
 * @apiVersion 1.0.0
 * @apiName submit answer
 * @apiGroup Question
 * @apiParam {Number} questionOptionId Chosen answer id
 * @apiError 400 Bad request
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
 */
const submit = async (req, res, next) => {
  try {
    const { body: { questionOptionId }, user: { sub: authZeroId } } = req;

    if (!questionOptionId) {
      throw new BadRequest('Question option id is required');
    }

    const userData = await UserService.getUser(authZeroId);

    if (!userData) {
      throw new BadRequest('User not found');
    }

    const chosenOption = await QuestionService.getQuestionOption(questionOptionId);

    const answer = await QuestionService.insertAnswer({
      questionId: chosenOption.questionId,
      option: chosenOption.option,
      chosenBy: userData.id,
    });

    return res.send({ success: true, answer });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getQuestion,
  submit,
};
