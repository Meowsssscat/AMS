const express = require('express');
const router = express.Router();
const logoutCon = require('../controllers/logout');

router.get('/', logoutCon.logout)


module.exports = router;