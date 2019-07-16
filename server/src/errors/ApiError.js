const httpStatus = require('http-status');

module.exports = class ApiError extends Error {
  constructor(message, status) {
    super(message);

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || httpStatus.INTERNAL_SERVER_ERROR;
    if (message.errors) {
      this.message = message.message;
      this.errors = message.errors;
    } else {
      this.message = message;
    }
  }

  toJSON() {
    return {
      success: false,
      status: this.status,
      message: this.message,
      errors: this.errors,
      stack: process.env.NODE_ENV === 'production' ? [] : this.stack,
    };
  }
};
