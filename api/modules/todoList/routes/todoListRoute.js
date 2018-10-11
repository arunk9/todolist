'use strict';

module.exports = function(app) {
	var todoList = require("../controllers/todoListController.js");

	// todo task routes
	app.route('/tasks')
		.post(todoList.addTask);   // create a new task

	// todo task routes
	app.route('/:username/tasks')
		.get(todoList.getAllTasks); // get all the tasks based on the username

	app.route('/tasks/:taskId')
		.get(todoList.showTask) // get a specific task
		.put(todoList.updateTask)
		.delete(todoList.removeTask);
};