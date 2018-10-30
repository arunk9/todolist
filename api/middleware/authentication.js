'use strict';

const auth = require("./auth");

exports.default = (req, res, next) => {

  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    const decodedToken = auth.decodeToken(token);
    if (decodedToken) {
      req.token = decodedToken;
      if (req.token.user._id) {
        const accessToken = auth.issueAccessToken(req.token.user._id);
        res.header('Access-Token', accessToken);
        return next();
      }
      // Token missing userId
      res.status(401);
      return res.json({ success: false, message: 'Failed to authenticate token'});
    }
    // Token most likely expired
    return res.json({ success: false, message: 'Failed to authenticate token'});
  }
  return res.json({ success: false, message: 'Failed to authenticate token'});
};
