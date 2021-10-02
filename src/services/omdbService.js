const { throwIfMissing } = require('../utils');

class OMDBService {
  /**
   * Initialize OMDB Service
   *
   * @param {object} opts - options
   * @property {object} opts.OMDBConnector - OMDB http connector object
   */
  constructor(opts) {
    throwIfMissing(opts.omdbConnector, 'missing OMDB Connector');
    throwIfMissing(opts.logger, 'missing logger');

    Object.assign(this, opts);
  }

  async search(opts) {
    return this.omdbConnector.search(opts);
  }
}

module.exports = OMDBService;
