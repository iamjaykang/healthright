const { NotFoundError, BadRequestError, UnauthorizedError, ForbiddenError, InternalServerError, BadGatewayError } = require("../helpers/error.helper");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  if (res.headersSent) {
    return next(err);
  }

  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof NotFoundError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof BadRequestError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof UnauthorizedError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof ForbiddenError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof InternalServerError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof BadGatewayError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode);
  res.setHeader("Content-Type", "application/json");
  res.json({ message: err.message });
};

module.exports = errorHandler;
