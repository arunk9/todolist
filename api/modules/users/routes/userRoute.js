'use strict';

var express = require('express')
var router = express.Router()
var user = require("../controllers/userController.js");

// User CRUD operations
router.post('/', user.addUser); // create a new user
router.get('/', user.getAllUsers); // get users information
router.get('/:userId', user.showUser); // get a specific user information
router.put('/:userId', user.updateUser); // udpate a specific user
router.delete('/:userId', user.removeUser); // delete a specific user

module.exports = router