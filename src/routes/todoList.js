const router = require('express').Router();
const { addListHandler, deleteListHandler, updateListHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.delete('/', authenticate, deleteListHandler);
router.post('/', authenticate, addListHandler);
router.put('/', authenticate, updateListHandler);

module.exports = router;
