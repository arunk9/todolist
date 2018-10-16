'use strict';

var express = require('express')
var router = express.Router()

var userController = require("./UserController.js");

// User CRUD operations
router.get('/', userController.getAllUsers); // get users information
router.post('/', userController.addNewUser); // create a new user

router.get('/:userId' , userController.getUserById); // get a specific user information
router.put('/:userId', userController.updateUser); // udpate a specific user
router.delete('/:userId' ,userController.deleteUser); // delete a specific user

module.exports = router