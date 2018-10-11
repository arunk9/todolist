'use strict';

var express = require('express')
var router = express.Router()

var todoList = require("../controllers/todoListController.js");

// Task CRUD operations
router.get('/:userId/tasks', todoList.getUserTasks); // get all task associated to user
router.post('/:userId/task', todoList.addTask);   // create a new task
router.get('/tasks/:taskId' ,todoList.showTask); // get a specific task
router.put('/tasks/:taskId', todoList.updateTask); // udpate a specific task
router.delete('/tasks/:taskId' ,todoList.removeTask); // delete a specific task

module.exports = router