const QuestionService = require('./question.service');
const UserService = require('../user/user.service');
const { BadRequest } = require('../../errors');

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
 * @api {get} /question/result Get answers submitted by user
 * @apiVersion 1.0.0
 * @apiName get answers submitted by user
 * @apiGroup Question
 * @apiError 400 Bad request
 * @apiError 401 Unauthorised
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
*/
const getResult = async (req, res, next) => {
  try {
    const { user: { sub: authZeroId } } = req;
    const userData = await UserService.getUser(authZeroId);

    if (!userData) {
      throw new BadRequest('User not found');
    }

    const answers = await QuestionService.getUserAnswers(userData.id);

    return res.send({ success: true, answers });
  } catch (error) {
    next(error);
  }
};

/**
 * @api {post} /question Submit an answer to a question
 * @apiVersion 1.0.0
 * @apiName submit answer
 * @apiGroup Question
 * @apiParam {Array} questionOptionsId Array of answer id
 * @apiError 400 Bad request
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
 */
const submit = async (req, res, next) => {
  try {
    const { body: { questionOptionsId }, user: { sub: authZeroId } } = req;
    let answers = [];

    if (!questionOptionsId || !questionOptionsId.length) {
      throw new BadRequest('Question option id is required');
    }

    const userData = await UserService.getUser(authZeroId);

    if (!userData) {
      throw new BadRequest('User not found');
    }
    
    for (const questionOptionId of questionOptionsId) {
      const chosenOption = await QuestionService.getQuestionOption(questionOptionId);
  
      const answer = await QuestionService.insertAnswer({
        questionId: chosenOption.questionId,
        option: chosenOption.option,
        chosenBy: userData.id,
      });

      answers.push(answer);
    }

    return res.send({ success: true, answer: answers });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getQuestion,
  getResult,
  submit,
};
