'use strict';

var express = require('express')
var router = express.Router()
var authGuard = require("../../../../api/middleware/authMiddleware.js");
var user = require("../controllers/userController.js");


router.post('/', user.addUser); // create a new user
// User CRUD operations
router.get('/', authGuard.authenticate, user.getAllUsers); // get users information
router.get('/:userId', user.getAllUsers, user.showUser); // get a specific user information
router.put('/:userId', user.getAllUsers, user.updateUser); // udpate a specific user
router.delete('/:userId', user.getAllUsers, user.removeUser); // delete a specific user

module.exports = router