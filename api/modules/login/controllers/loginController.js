'use strict';

var mongoose = require("mongoose");
var User = mongoose.model("User");

// Create a New Task
exports.authenticate = (req, res) => {
	User.findOne({username: req.body.username, password: req.body.password}, (err, user) => {
		if (err) {
			console.error(err);
			res.send(err);
		}

		if (user) {
			// if user is found and password is right
			// create a token with only our given payload
			// we don't want to pass in the entire user since that has the password
			const payload = {
				user: user
			};

			var token = jwt.sign(payload, app.get('superSecret'), {
				expiresInMinutes: 1440 // expires in 24 hours
			  });

			  res.json({
				  success: true,
				  message: "User Authentication successful",
				  payload: token
			  })

		} else {
			res.json({ 
				success: false,
				message: 'Authentication failed. User not found.'
			});
		}
	});
	console.log("POST API request to login user");
};