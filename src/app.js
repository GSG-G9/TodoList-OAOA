require('env2')('./.env');

const { join } = require('path');

const express = require('express');
const logger = require('morgan');

const router = require('./routes');
const { errorHandler, notFoundHandler } = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'));
}

app.use(router);
// app.use(notFoundHandler);
// app.use(errorHandler);

module.exports = app;
