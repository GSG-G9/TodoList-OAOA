require('env2')('./.env');

const { join } = require('path');

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const router = require('./routes');
const { errorHandler, notFound } = require('./controllers');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.use(cookieParser());

if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'));
}

app.use(router);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
