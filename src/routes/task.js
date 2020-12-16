const router = require('express').Router();
const { deleteTask } = require('../controllers/user');

router.delete('/', deleteTask);

const { updateTaskHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.put('/', authenticate, updateTaskHandler);

module.exports = router;
