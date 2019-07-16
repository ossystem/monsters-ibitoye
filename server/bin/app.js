const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const sanitizer = require('express-sanitizer');
const httpStatus = require('http-status');
const bodyParser = require('body-parser');

const appConfig = require('../config/app');
const DbService = require('../src/services/db.service');

const app = express();

// Initialize database
initialize();

// Applying all required middlewares
app.use(logger('combined'));
app.use(cors());
app.use(express.json(bodyParser.json));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(sanitizer());
app.set('trust proxy', true);

// Initialize all routes
app.use(require('../src/routes'));

// Handle route not found
app.use(routeNotFoundHandler);

// Handle errors
app.use(mainErrorHandler);

async function initialize() {
  try {
    await DbService.connect(appConfig.db).sync();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

function routeNotFoundHandler(req, res, next) {
  res.status(httpStatus.NOT_FOUND);
  res.send({
    error: [{
      message: 'Not found url',
    }],
  });
};

function mainErrorHandler(err, req, res, next) {
  const errorStatus = err.status || err.statusCode;

  if (err && errorStatus && (err.error || err.message)) {

    res.status(errorStatus);

    return res.send(err);
  }

  // TODO: LOG ERROR TO A FILE
  console.log(err.statusCode)
  const error = { status: httpStatus.INTERNAL_SERVER_ERROR, success: false };

  if (appConfig.app.env !== 'production') {
    error.message = err.stack || err;
  } else {
    error.message = 'Something went wrong!';
  }

  res.status(error.status);
  return res.send(error);
}

module.exports = app;
