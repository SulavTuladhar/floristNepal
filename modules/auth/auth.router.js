const router = require('express').Router();

const authController = require('./auth.controller');
// localhost:9090/api/auth/login -- POST
router.route('/register')
    .post(authController.registerFlorist)
router.route('/login')
    .post(authController.FloristLogin)
module.exports = router;