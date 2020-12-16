const router = require('express').Router();

const { updateTaskHandler, deleteTaskHandler, addTaskHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.post('/', authenticate, addTaskHandler);
router.delete('/', authenticate, deleteTaskHandler);
router.put('/', authenticate, updateTaskHandler);

module.exports = router;
