const router = require('express').Router();
const { getUserDataHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.get('/getData', authenticate, getUserDataHandler);
module.exports = router;
