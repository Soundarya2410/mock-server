/**
 * Request Logger Middleware
 */

const logger = require('../utils/logger');

function generateRequestId() {
  return `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function sanitizeForLogging(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const sensitiveKeys = ['password', 'secret', 'token', 'api_key', 'apikey', 'client_secret', 'access_token'];
  const sanitized = { ...obj };
  for (const key of Object.keys(sanitized)) {
    if (sensitiveKeys.some(sk => key.toLowerCase().includes(sk))) {
      sanitized[key] = '[REDACTED]';
    }
  }
  return sanitized;
}

const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  req.requestId = req.headers['x-request-id'] || generateRequestId();

  logger.info('Incoming request', {
    requestId: req.requestId,
    method: req.method,
    path: req.path,
    query: req.query,
    body: sanitizeForLogging(req.body)
  });

  const originalSend = res.send;
  res.send = function(body) {
    const responseTime = Date.now() - startTime;
    logger.info('Outgoing response', {
      requestId: req.requestId,
      statusCode: res.statusCode,
      responseTime: `${responseTime}ms`
    });
    res.setHeader('X-Request-ID', req.requestId);
    res.setHeader('X-Response-Time', `${responseTime}ms`);
    return originalSend.call(this, body);
  };

  next();
};

module.exports = { requestLogger, generateRequestId };
