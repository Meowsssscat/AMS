const express = require('express');
const router = express.Router();
const sigUCon = require('../controllers/signUp');
const sigUpMw = require('../middleware/signUpMw')

router.get('/', sigUCon.loadSignUpForm);
router.post('/', sigUpMw.checkIfUserExist, sigUCon.registerUser); 

module.exports = router;
