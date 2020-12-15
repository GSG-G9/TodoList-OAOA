const { join } = require('path');

const notFound = (req, res) => {
  res.redirect('/notFound');
};

const notFoundRoute = (req, res) => {
//   res.sendFile(join(__dirname, '..', '..', 'public', '404.html'));
  res.end();
};

module.exports = {
  notFoundRoute,
  notFound,
};
