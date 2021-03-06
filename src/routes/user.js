const router = require('express').Router();
const { getUserDataHandler, loginHandler, signupHandler } = require('../controllers');
const { authenticate } = require('../middleware/authentication');

router.get('/getData', authenticate, getUserDataHandler);
router.post('/signup', signupHandler);
router.post('/login', loginHandler);

module.exports = router;
