const router = require('express').Router();
const { getUserDataHandler, loginHandler } = require('../controllers');

router.get('/getData', getUserDataHandler);
router.post('/login', loginHandler);

module.exports = router;
