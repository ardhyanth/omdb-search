const handler = async (req, res) => {
  const { omdbService } = req.locals;
  const { query } = req;

  let info = query.keyword ? 'Query using keyword mode' : 'Query using movieID';
  if (query.keyword && query.id) {
    info = 'Query using keyword mode, id field is ignored';
  }

  const body = await omdbService.search(query);

  const response = {
    info,
    ...body,
  };

  res.send(response);
};

module.exports = handler;
