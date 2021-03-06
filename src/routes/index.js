const router = require('express').Router();

const user = require('./user');
const list = require('./todoList');
const task = require('./task');
const { notFoundRoute } = require('../controllers');

router.use('/user', user);
router.use('/list', list);
router.use('/task', task);
router.use('/notFound', notFoundRoute);

module.exports = router;
