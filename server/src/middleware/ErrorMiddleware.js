const errorHandler = (err, req, res, next) => {
  let status = res.statusCode;
  status ? res.status(status) : res.status(500);
  res.json({ message: err.message });
};

module.exports = errorHandler;
