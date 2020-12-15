const {
  addTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
} = require('./task');

const {
  addListHandler,
  deleteListHandler,
  updateListHandler,
} = require('./todoList');

const { getUserData } = require('./getUserData');
const { loginHandler } = require('./loginHandler');
const { signupHandler } = require('./signupHandler');

module.exports = {
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
