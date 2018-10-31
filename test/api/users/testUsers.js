'use strict';

const chai = require("chai");
const chaitHttp = require("chai-http");
const server = require("../../../server");
const authToken = require("../../../api/middleware/auth");
const bcrypt = require("bcrypt");
let should = chai.should();
let User = require("../../../api/modules/users/models/userModel");

chai.use(chaitHttp);

describe("Set User auth token before each request", () => {
    let currentUser = null;
    let accessToken = null;
    before((done) => {

        let userData = {
            username: "testAdmin",
            email: "test@admin.com",
            role: "admin"
        }

	    userData.password = bcrypt.hashSync('123456', 5);
        currentUser = new User(userData);
        currentUser.save((err, User) => {
            if (err) {
                console.error(err);
            }
        });

        accessToken = authToken.issueAccessToken(currentUser._id);
        done();
    });

    after((done) => {
        console.log("after method");
        User.remove({_id: currentUser._id}, (err, User) => {
            if (err) {
                console.error(err);
            }
            console.log("User Deleted Successfully");
        });
        done();
    });

    describe('create user', () => {
        it('should create a user', (done) => {
            let userData = {
                username: "test",
                email: "test@test.com",
                password:"123456"
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