const router = require('express').Router();
const { addListHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.post('/', authenticate, addListHandler);

module.exports = router;
