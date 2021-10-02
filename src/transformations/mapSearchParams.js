const mapSearchParams = (query) => ({
  s: query.keyword,
  i: query.id,
  t: query.title,
  type: query.type,
  y: query.year,
  plot: query.plot,
  page: query.page,
  apikey: query.apikey,
});

module.exports = mapSearchParams;
