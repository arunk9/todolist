'use strict';

module.exports = function(app) {
	var user = require("../controllers/userController.js");

	// user specific routes
	app.route('/users')
		.post(user.addUser)
		.get(user.getAllUsers);   

	app.route('/users/:userId')
		.get(user.showUser) // get a specific task
		.put(user.updateUser)
		.delete(user.removeUser);
};