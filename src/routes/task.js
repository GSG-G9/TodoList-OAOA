const router = require('express').Router();

const { updateTaskHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.put('/', authenticate, updateTaskHandler);

module.exports = router;
