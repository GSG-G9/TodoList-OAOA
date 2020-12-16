const { addTask, deleteTask, updateTask } = require('./tasks');
const { addList, deleteList, updateList } = require('./todoLists');
const { getUserData } = require('./getUserData');
const { login } = require('./login');
const { signup } = require('./signup');
const { isUserExist } = require('./isUserExist');

module.exports = {
  addTask,
  deleteTask,
  updateTask,
  addList,
  deleteList,
  updateList,
  getUserData,
  login,
  signup,
  isUserExist,
};
