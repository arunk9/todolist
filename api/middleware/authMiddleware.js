'use strict';

const jwt = require("jsonwebtoken");
const config = require("../../config");

exports.authenticate = (req, res, next) => {
    console.log("Inside Auth Middleware");

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // if api has token then decode
    if (token) {
        console.log("Received token from api request");
        jwt.verify(token, config.secret, (error, decoded) => {
                if (error) {
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });    
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;

                    // verify is user token mathes with the user_id from the request body or url
                    if (validateUser(req)) {
                        console.log("Valid user!");
                        next();
                    } else {
                        return res.json({
                            success: false,
                            message: "User token dosen't match with the request parameters"
                        }); 
                    }
                }
        });
    } else {
        // if there is no token
        // return an error
        console.log("Unable to find token from api request");
        
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

    }

    next();
};

function validateUser(request) {
    var userId = request.body.user_id || request.params.user_id || request.body.userId || request.params.userId;

    if (userId) {
        return true;
    }

    return false;
}