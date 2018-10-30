'use strict';

const chai = require("chai");
const chaitHttp = require("chai-http");
const server = require("../../../server");
const authToken = require("../../../api/middleware/auth");
const bcrypt = require("bcrypt");
let should = chai.should();
// let mongoose = require("mongoose");
let User = require("../../../api/modules/users/models/userModel");
// let userController = require("../../../api/modules/login/controllers/loginController");

chai.use(chaitHttp);

describe("Set User auth token before each request", () => {
    before((done) => {
        var currentUser = null;
        var accessToken = null;

        let userData = {
            username: "testAdmin",
            email: "test@admin.com",
            role: "admin"
        }

        // encrypt password and save user to DB
	    bcrypt.hash('123456', 5, (error, hash) => {
			if (error) {
				console.log("error while generating password hash");
				res.send(error);
			}
			userData.password = hash;
			var newUser = new User(userData);
			newUser.save((err, User) => {
				if (err) {
					// error in api request
					console.error(err);
				}
            });

            this.currentUser = newUser;
        });
        console.log(currentUser);
        accessToken = authToken.issueAccessToken(currentUser._id);
    });

    after((done) => {
        User.remove({_id: currentUser._id}, (err, User) => {
            if (err) {
                console.error(err);
            }
            console.log("User Deleted Successfully");
        });
    });

    describe('create user', () => {
        it('should create a user', (done) => {
            let userData = {
                username: "test",
                email: "test@test.com"
            };
            
            chai.request(server)
                .post("/api/users")
                .send(userData)
                .set({"x-access-token": accessToken})
                .end((err, res) => {
                    if (!err) {
                        res.should.have.status(200);
                        //res.should.have.property()
                    } else {
                        console.log(err);
                    }
                    done();
                });
        });
    });
});