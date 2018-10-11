'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// declaring the task collection schema
var taskSchema = new Schema({
	username: {
		type: String,
		required: "Need username to associate a task"
	},
	task_name: {
		type: String,
		required: "Please enter the name of the task"
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type:[{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Task', taskSchema);