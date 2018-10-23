'use strict';

const jwt = require("jsonwebtoken");
const config = require("../../config");


const issueAccessToken = (userId) => {
  if (userId) {
    const payload = {
      userId
    };
    return jwt.sign(payload, config.secret, {
      expiresIn: '2h', // expires in 2 hours
    });
  }
  return null;
};

const issueRefreshToken = (userId, salt) => {
  if (userId) {
    const payload = {
      userId,
      salt,
    };
    return jwt.sign(payload, config.secret, {
      expiresIn: '3650d', // expires in 10 years
    });
  }
  return null;
};

const decodeToken = (token) => {
  try {
    return jwt.verify(token, config.secret);
  } catch (err) {
    return null;
  }
};

module.exports = {
  issueAccessToken,
  issueRefreshToken,
  decodeToken,
};
