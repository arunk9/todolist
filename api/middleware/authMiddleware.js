'use strict';

exports.authenticate = (req, res, next) => {
    console.log("Inside Auth Middleware");

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // if api has token then decode
    if (token) {
        console.log("Received token from api request");
        jwt.verify(token, app.get('superSecret', (error, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });    
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;    
                    next();
                }
            })
        );
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