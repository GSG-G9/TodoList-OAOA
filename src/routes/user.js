const router = require('express').Router();
const { getUserDataHandler } = require('../controllers');
const { signupHandler } = require('../controllers');

router.get('/getData', getUserDataHandler);
router.post('/signup', signupHandler);
module.exports = router;
