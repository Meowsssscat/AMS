const express = require('express');
const router = express.Router();
const landingPageCon = require('../controllers/landingPage');


router.get('/', landingPageCon.loadLandingPage);


module.exports = router;