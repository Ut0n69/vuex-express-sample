const express = require('express');

const router = express.Router();
router.use('/list', require('./Modules/list'));

module.exports = router;
