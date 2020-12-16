const router = require('express').Router();
const { getUserDataHandler, loginHandler, signupHandler } = require('../controllers');

router.get('/getData', getUserDataHandler);
router.post('/signup', signupHandler);
router.post('/login', loginHandler);

module.exports = router;
