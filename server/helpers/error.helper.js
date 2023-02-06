class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
    this.statusCode = 400;
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.name = "ForbiddenError";
    this.statusCode = 403;
  }
}

class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "InternalServerError";
    this.statusCode = 500;
  }
}

class BadGatewayError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadGatewayError";
    this.statusCode = 502;
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  InternalServerError,
  BadGatewayError,
};
