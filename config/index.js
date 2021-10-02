require('dotenv').config();

const pkg = require('../package.json');

const config = {
  name: pkg.name,
  timeZone: process.env.TZ,
  logger: {
    name: `${pkg.name}-logger`,
    level: process.env.LOG_LEVEL || 'trace',
  },
  resources: {
    http: {
      omdb: {
        baseUrl: process.env.OMDB_BASE_URL,
      },
    },
  },
};

module.exports = config;
