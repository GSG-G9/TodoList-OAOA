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
  getUserDataHandler,
  loginHandler,
  signupHandler,
  logout,
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
  getUserDataHandler,
  loginHandler,
  signupHandler,
  logout,
};
