/**
 * Module dependencies.
 */
const http = require('http');
const { createLogger } = require('bunyan');

const utils = require('./utils');
const expressApp = require('./app');
const config = require('../config');

/**
 * Initiate logger object
 */
const logger = createLogger(config.logger);

/**
 * Create HTTP server.
 */
const server = http.createServer(expressApp);

/**
 * Get port from environment.
 */
const port = utils.normalizePort(process.env.PORT);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', (error) => utils.onError(error, port, logger));
server.on('listening', () => utils.onListening(server, logger));
