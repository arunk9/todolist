'use strict';

var express = require('express')
var router = express.Router()
var user = require("../controllers/userController.js");
var authGuard = require("../../../middleware/authMiddleware");
var protectedRoute = require("../../../middleware/authentication");

// User CRUD operations
router.post('/',protectedRoute.default, user.addUser); // create a new user
router.get('/',protectedRoute.default, user.getAllUsers); // get users information
router.get('/:userId',protectedRoute.default, user.showUser); // get a specific user information
router.put('/:userId',protectedRoute.default, user.updateUser); // udpate a specific user
router.delete('/:userId',protectedRoute.default, user.removeUser); // delete a specific user

module.exports = router