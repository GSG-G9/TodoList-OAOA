const router = require('express').Router();
const { deleteTask } = require('../controllers/user');

router.delete('/', deleteTask);

module.exports = router;
