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

const { getUserDataHandler } = require('./getUserDataHandler');
const { loginHandler } = require('./loginHandler');
const { signupHandler } = require('./signupHandler');
const { logout } = require('./logout');

module.exports = {
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
