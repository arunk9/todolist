'use strict';

module.exports = function(app) {
	var login = require("../controllers/loginController.js");

	// user login route
	app.route('/login')
		.post(todoList.addTask);
};