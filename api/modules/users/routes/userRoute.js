'use strict';

var express = require('express')
var router = express.Router()

var user = require("../controllers/userController.js");

// User CRUD operations
router.get('/users', user.getAllUsers); // get users information
router.post('/user', user.addUser); // create a new user

router.get('/users/:userId' , user.showUser); // get a specific user information
router.put('/users/:userId', user.updateUser); // udpate a specific user
router.delete('/users/:userId' ,user.removeUser); // delete a specific user

module.exports = router