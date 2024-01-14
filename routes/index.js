const router = require('express').Router();

router.use('/users', require('./userRoutes'));
router.use('/job', require('./jobRoutes'));

module.exports = router;
