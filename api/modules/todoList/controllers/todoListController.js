'use strict';

var mongoose = require("mongoose");
var Task = mongoose.model("Task");

// GET All Tasks
exports.getUserTasks = (req, res) => {
	console.log("This is a get all available tasks api request");
	Task.find({user_id: req.params.userId},(err, tasks) =>{
		if (err) {
			res.send(err);
			console.error(err);
		}

		res.json(tasks);
	});
};

// Create a New Task
exports.addTask = (req, res) => {
	console.log("POST API request to create a new Task");
	req.body.user_id = req.params.userId;
	var new_task = new Task(req.body);
	new_task.save((err, task) => {
		if (err) {
			// error in api request
			res.send(err);
			console.error(err);
		}

		res.json(task);
	});
};

// Get a new task by Id
exports.showTask = (req, res) => {
	console.log("GET a task by specific ID");
	Task.findById(req.params.taskId, (err, task) => {
		if (err) {
			console.error(err);
			res.send(err);
		}

		res.json(task);
	});
};

// Update an existing task
exports.updateTask = (req, res) => {
	console.log("PUT API request to update an existing task");

	Task.findOneAndUpdate({_id: req.params.taskId}, (err, task) => {
		if (err) {
			console.error(err);
			res.send(err);
		}

		res.json(task);
	});
};

// Delete an existing task
exports.removeTask = (req, res) => {
	console.log("DELETE API request to remove an existing task");

	Task.remove({_id: req.params.taskId}, (err, task) => {
		if (err) {
			console.error(err);
			res.send(err);
		}

		res.json({"message": "Task Deleted Successfully"});
	});
};