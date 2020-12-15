const {
  errorHandler,
  notFoundRoute,
  notFound,
} = require('./error');
const {
  addTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
  addListHandler,
  deleteListHandler,
  updateListHandler,
  getUserData,
  loginHandler,
  signupHandler,
} = require('./user');

module.exports = {
  errorHandler,
  notFoundRoute,
  notFound,
  addTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
  addListHandler,
  deleteListHandler,
  updateListHandler,
  getUserData,
  loginHandler,
  signupHandler,
};
