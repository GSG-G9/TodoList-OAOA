const { required } = require('joi');
const { addTask, deleteTask, updateTask } = require('./tasks');
const {
  addList, deleteList, updateList, getDataById,
} = require('./todoLists');
const { getUserData } = require('./getUserData');
const { login } = require('./login');
const { signup } = require('./signup');
const { isUserExist } = require('./isUserExist');
const { checkUser } = require('./checkUserIfExists');

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
  checkUser,
  getDataById,
};
