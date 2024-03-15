const express = require('express');
const router = express.Router();

const studentsApiroute = require('./api/api.students.router');
const apiAuthRouter = require('./api/api.auth.routes');

router.use('/api/students', studentsApiroute);
router.use('/api/auth', apiAuthRouter);

module.exports = router;
