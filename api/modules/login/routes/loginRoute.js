'use strict';

var express = require('express')
var router = express.Router()

var loginController = require("../controllers/loginController.js");

// login request
router.post('/login', loginController.login);

module.exports = router