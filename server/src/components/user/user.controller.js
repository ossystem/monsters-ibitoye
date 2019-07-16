const UserService = require('./user.service');
const { BadRequest } = require('../../errors');

/**
 * @api {get} /user Get all users
 * @apiVersion 1.0.0
 * @apiName Get users
 * @apiGroup User
 * @apiError 400 Bad request
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
 */
const getUsers = async (req, res, next) => {
  try {
    const { user: { sub: authZeroId } } = req;

    const users = await UserService.getUser(authZeroId)

    return res.send({ success: true, users });
  } catch (error) {
    next(error);
  }
};

/**
 * @api {put} /user/completed User answered all question and result submited
 * @apiVersion 1.0.0
 * @apiName Submitted user answer
 * @apiGroup User
 * @apiError 400 Bad request
 * @apiError 401 Unauthorised
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
 */
const userCompleted = async (req, res, next) => {
  try {
    const { user: { sub: authZeroId } } = req;

    const updated = await UserService.updateUser({
      authZeroId, 
      update: { answerSent: true },
    });

    if (!updated) {
      throw new BadRequest('Already updated');
    }

    return res.send({ success: updated });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  userCompleted,
};
