'use strict';


var mongoose = require("mongoose");
var Task = mongoose.model("Task");

// Create a New Task
exports.login = (req, res) => {
	console.log("POST API request to login user");
};