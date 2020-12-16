const router = require('express').Router();
const { updateTaskHandler, deleteTaskHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.delete('/', authenticate, deleteTaskHandler);
router.put('/', authenticate, updateTaskHandler);

module.exports = router;
