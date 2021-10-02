const uuid = require('uuid');

const extractReq = (req) => {
  const {
    method, path, query, httpVersion, headers,
  } = req;

  return {
    event: 'Request',
    method,
    path,
    query,
    headers,
    httpVersion,
    source: {
      remoteAddress: req.ip,
      userAgent: req.get('User-Agent'),
    },
  };
};

const extractRes = (res, requestTimestamp) => {
  const { statusCode, locals } = res;

  locals.responseTimestamp = new Date();
  const responseTime = `${locals.responseTimestamp.getTime() - requestTimestamp.getTime()}ms`;

  return {
    event: 'Response',
    statusCode,
    responseTime,
    responseHeaders: res.getHeaders(),
  };
};

/**
 * log incoming request, called after "setupRequestLogger"
 * @param {object} logger - logger object
 * @returns {function} - middleware function for request logging
 */
const requestLogger = (logger) => (req, res, next) => {
  const requestTimestamp = new Date();

  req.logger = logger.child({ req_id: uuid.v4() }, true);
  req.logger.info({ ...extractReq(req) });

  res.on('finish', () => req.logger.info({ ...extractRes(res, requestTimestamp) }));

  next();
};

module.exports = requestLogger;
