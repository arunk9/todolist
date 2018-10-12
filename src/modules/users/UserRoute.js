'use strict';

var express = require('express')
var router = express.Router()

var userController = require("./UserController.js");

// User CRUD operations
router.get('/users', userController.getAllUsers); // get users information
router.post('/user', userController.addNewUser); // create a new user

router.get('/users/:userId' , userController.getUserById); // get a specific user information
router.put('/users/:userId', userController.updateUser); // udpate a specific user
router.delete('/users/:userId' ,userController.deleteUser); // delete a specific user

module.exports = router