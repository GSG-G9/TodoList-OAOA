const router = require('express').Router();
const { addListHandler, deleteListHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.delete('/', authenticate, deleteListHandler);
router.post('/', authenticate, addListHandler);

module.exports = router;
