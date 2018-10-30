'use strict';

const chai = require("chai");
const chaitHttp = require("chai-http");
const server = require("../../../server");
let should = chai.should();
// let mongoose = require("mongoose");
// let User = require("../../../api/modules/users/models/userModel");
// let loginController = require("../../../api/modules/login/controllers/loginController");

chai.use(chaitHttp);

describe("POST /login", () => {
    it("user should be logged in", (done) => {

        // prepare login creds object
        let userCreds = {
            username: "sam.billings",
            password: "123456"
        }

        // login api request with test user creds
        chai.request(server)
            .post('/api/login')
            .send(userCreds)
            .end((err, res) => {
                if (!err) {
                    res.should.have.status(200);
                } else {
                    console.log(err);
                }
                
            done();
            });
    });
});