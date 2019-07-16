
/**
 * @api {post} /answer Submit an answer to a question
 * @apiVersion 1.0.0
 * @apiName submit answer
 * @apiGroup Answer
 * @apiParam {Number} questionOptionId Chosen answer id
 * @apiParam {Number} userId User id
 * @apiError 400 Bad request
 * @apiErrorExample {json} Error-Response:
 * { "success": false, "status": "400", "message": "Bad request" }
 */
const submit = (req, res, next) => {
  // questionOptionId required and add chosenBy and create a new record
  return res.send({ success: true });
};

module.exports = {
  submit,
}
