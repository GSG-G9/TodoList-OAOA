// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  status.json({
    title: 'something went wrong',
    status,
    errorMessage: err.msg || err.message,
  });
};

module.exports = {
  errorHandler,
};
