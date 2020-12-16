const router = require('express').Router();
const { addTaskHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.post('/', authenticate, addTaskHandler);

module.exports = router;
