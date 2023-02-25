const router = require('express').Router();

const AuthRouter = require('./modules/auth/auth.router');

// localhost:9090/api/auth/
router.use('/auth', AuthRouter);

module.exports = router;