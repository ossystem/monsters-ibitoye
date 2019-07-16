const router = require('express').Router();
const request = require('request-promise');

const BadRequest = require('../errors/BadRequest');
const { authZero } = require('../../config/app');

/**
 * @api {post} /token Authorize user by generating token
 * @apiVersion 1.0.0
 * @apiName generate auth token
 * @apiGroup User
 * @apiParam {String} email User email
 * @apiParam {String} password User password
 * @apiError 400 Bad request
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
 */
router.post('/', async (req, res, next) => {
  try {
    const { body: { email, password } } = req;

    if (!email || !password) {
      throw new BadRequest('Email and Password are required in body');
    }

    const options = { 
      method: 'POST',
      url: authZero.url,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      form: { 
        grant_type: authZero.grantType,
        username: email,
        password: password,
        audience: authZero.audience,
        scope: authZero.scope,
        client_id: authZero.clientId,
        client_secret: authZero.clientSecret,
      }
    };

    const token = await request(options);

    res.json({ success: true, token: JSON.parse(token) });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
