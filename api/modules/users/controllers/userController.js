'use strict';

var mongoose = require("mongoose");
var User = mongoose.model("User");
const bcrypt = require('bcrypt');

// Create a New User
exports.addUser = (req, res) => {
	console.log("POST API request to create a new User");
	var userData = req.body;
	
	// encrypt password and save user to DB
	bcrypt.hash(req.body.password, 5, (error, hash) => {
			if (error) {
				console.log("error while generating password hash");
				res.send(error);
			}
			userData.password = hash;
			var newUser = new User(userData);
			newUser.save((err, User) => {
				if (err) {
					// error in api request
					res.send(err);
					console.error(err);
				}

				res.json(User);
			});
	});
};

// GET All Users
exports.getAllUsers = (req, res) => {
	console.log("This is a get all available Users api request");
	User.find({},(err, Users) =>{
		if (err) {
			res.send(err);
			console.error(err);
		}

		res.json(Users);
	});
};

// Get a new User by Id
exports.showUser = (req, res) => {
	console.log("GET a User by specific ID");
	User.findById(req.params.UserId, (err, User) => {
		if (err) {
			console.error(err);
			res.send(err);
		}

		res.json(User);
	});
};

// Update an existing User
exports.updateUser = (req, res) => {
	console.log("PUT API request to update an existing User");

	User.findOneAndUpdate({_id: req.params.UserId}, (err, User) => {
		if (err) {
			console.error(err);
			res.send(err);
		}

		res.json(User);
	});
};

// Delete an existing User
exports.removeUser = (req, res) => {
	console.log("DELETE API request to remove an existing User");

	User.remove({_id: req.params.UserId}, (err, User) => {
		if (err) {
			console.error(err);
			res.send(err);
		}

		res.json({"message": "User Deleted Successfully"});
	});
};