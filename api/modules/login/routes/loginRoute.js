'use strict';

var express = require('express')
var router = express.Router()

var login = require("../controllers/loginController.js");

// login request
router.post('/login', login.authenticate);

module.exports = router