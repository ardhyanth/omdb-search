const request = require('got');

const { OmdbService } = require('../services');
const { OmdbConnector } = require('../connectors');

const contextRegister = (config) => (req, res, next) => {
  const { logger } = req;

  const omdbConnector = new OmdbConnector({ config, request, logger });
  const omdbService = new OmdbService({ omdbConnector, logger });

  Object.assign(req, { locals: { omdbService } });

  return next();
};

module.exports = contextRegister;
