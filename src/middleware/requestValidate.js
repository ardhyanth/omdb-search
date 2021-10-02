const requestValidate = (schema) => (req, res, next) => {
  const { query } = req;

  const validation = schema.validate(query);
  if (validation.error) {
    const { details } = validation.error;
    const { message } = details[0];

    return next({ status: 400, message });
  }
  return next();
};

module.exports = requestValidate;
