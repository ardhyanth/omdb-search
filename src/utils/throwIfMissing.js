const throwIfMissing = (obj, message) => {
  if (obj === undefined) {
    throw message;
  }
};

module.exports = throwIfMissing;
