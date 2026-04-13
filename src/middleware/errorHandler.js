/**
 * Error Handler Middleware
 */

const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error('Error occurred', {
    requestId: req.requestId,
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method
  });

  const statusCode = err.statusCode || err.status || 500;

  res.status(statusCode).json({
    status: 'failure',
    message: err.message || 'Internal server error',
    details: {
      requestId: req.requestId,
      path: req.path,
      method: req.method
    }
  });
};

const notFoundHandler = (req, res) => {
  res.status(404).json({
    status: 'failure',
    message: 'Endpoint not found',
    details: {
      path: req.path,
      method: req.method
    }
  });
};

module.exports = { errorHandler, notFoundHandler };
