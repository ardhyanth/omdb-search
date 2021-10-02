const { throwIfMissing } = require('../utils');
const { mapSearchParams } = require('../transformations');

class OMDBConnector {
  /**
     * Create instance of OMDBConnector
     *
     * @param {object} opts - options
     * @property {object} opts.config - configuration object
     * @property {object} opts.request - request object
     * @property {object} opts.logger - logger object
     */
  constructor(opts) {
    throwIfMissing(opts, 'Missing opts');
    throwIfMissing(opts.config, 'Missing config');
    throwIfMissing(opts.request, 'Missing request');
    throwIfMissing(opts.logger, 'Missing logger');

    const {
      config, request, logger,
    } = opts;

    const httpRequest = request.extend({
      prefixUrl: config.resources.http.omdb.baseUrl,
      responseType: 'json',
      resolveBodyOnly: true,
    });

    Object.assign(this, { config, httpRequest, logger });
  }

  /**
     * Search for
     *
     * @returns {object} - primary account
     */
  async search(query) {
    this.logger.debug('Getting primary account');

    const searchParams = mapSearchParams(query);

    let result;
    try {
      result = await this.httpRequest({ searchParams });
    } catch (err) {
      this.logger.error(err);
    }

    return result;
  }
}

module.exports = OMDBConnector;
