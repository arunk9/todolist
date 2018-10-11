'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// declaring the task collection schema
var userSchema = new Schema({
	username: {
		type: String,
		required: "Please enter the username"
	},
	email: {
		type: String,
		required: "Please enter the user's email"
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	role: {
		type:[{
			type: String,
			enum: ['admin', 'regular']
		}],
		default: ['regular']
	}
});

module.exports = mongoose.model('User', taskSchema);