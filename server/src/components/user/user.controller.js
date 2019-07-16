const UserModel = require('./models/user.model');

/**
 * @api {get} /user Get all users
 * @apiVersion 1.0.0
 * @apiName get users
 * @apiGroup User
 * @apiError 400 Bad request
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
 */
const getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.findAll();
  
    return res.send({ success: true, users });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
};
