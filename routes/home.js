const express = require('express');
const router = express.Router();
const homeCon = require('../controllers/home')


router.get('/', homeCon.loadHome)

module.exports = router;