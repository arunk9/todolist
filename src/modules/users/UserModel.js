'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// declaring the user collection schema
UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: "Please enter the username"
	},
	email: {
		type: String,
		unique: true,
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

/**
 * @typedef TodoSchema
 */
export default mongoose.model('User', UserSchema);