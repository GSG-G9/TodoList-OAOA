const router = require('express').Router();
const { addListHandler, updateListHandler } = require('../controllers');

const { authenticate } = require('../middleware/authentication');

router.post('/', authenticate, addListHandler);
router.put('/', authenticate, updateListHandler);

module.exports = router;
