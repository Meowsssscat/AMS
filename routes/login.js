const express = require('express');
const router = express.Router();
const loginCon = require('../controllers/login');

router.get('/', loginCon.loadLoginForm)

// USE MIDDLE WARE
router.post('/', loginCon.redirectToHome)


module.exports = router;