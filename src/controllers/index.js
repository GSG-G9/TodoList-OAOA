const { errorHandler, notFoundHandler } = require('./error');
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
  notFoundHandler,
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
