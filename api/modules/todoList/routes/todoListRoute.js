'use strict';

var express = require('express');
var router = express.Router();
var protectedRoute = require("../../../middleware/authentication");
var todoList = require("../controllers/todoListController.js");

// Task CRUD operations
router.get('/users/:userId/tasks', protectedRoute.default, todoList.getUserTasks); // get all task associated to user
router.post('/users/:userId/task', protectedRoute.default, todoList.addTask);   // create a new task
router.get('/tasks/:taskId', protectedRoute.default, todoList.showTask); // get a specific task
router.put('/tasks/:taskId', protectedRoute.default, todoList.updateTask); // udpate a specific task
router.delete('/tasks/:taskId', protectedRoute.default, todoList.removeTask); // delete a specific task

module.exports = router