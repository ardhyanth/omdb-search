/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = (server, logger) => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  logger.info(`Listening on ${bind}`);
};

module.exports = onListening;
