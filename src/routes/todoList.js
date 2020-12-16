const router = require('express').Router();
<<<<<<< HEAD
const { addListHandler, updateListHandler } = require('../controllers');

=======
const { addListHandler, deleteListHandler } = require('../controllers');
>>>>>>> 03dbf9da8382b9d3832c25e185c4e770bc9b2d9f
const { authenticate } = require('../middleware/authentication');

router.delete('/', authenticate, deleteListHandler);
router.post('/', authenticate, addListHandler);
router.put('/', authenticate, updateListHandler);

module.exports = router;
