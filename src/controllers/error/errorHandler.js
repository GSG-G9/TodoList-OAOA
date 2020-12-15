// eslint-disable-next-line no-unused-vars
const errorhandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    title: 'something went wrong',
    status: err.status,
    errorMessage: err.msg || err.message,
  });
};

module.exports = {
  errorhandler,
};
