const Joi = require('joi');

const query = Joi.object().keys({
  id: Joi.string(),
  keyword: Joi.when('id', { is: Joi.exist(), then: Joi.string().allow('', null), otherwise: Joi.string().required() }),
  type: Joi.string().allow('movie', 'series', 'episode'),
  plot: Joi.string().allow('short', 'full'),
  page: Joi.number().allow(null),
  title: Joi.string().allow(null),
  year: Joi.number().allow(null),
  apikey: Joi.string().required(),
});

module.exports = query;
