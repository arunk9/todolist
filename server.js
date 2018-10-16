'use strict';

var express = require("express");
var app = express();
var subpath = express();
var bodyParser = require("body-parser");

var port = process.env.port || 5000;

var argv = require('minimist')(process.argv.slice(2));
app.use(bodyParser());

// user module specific HTTP verbs
app.use('/api/users', require("./src/modules/users/UserRoute.js"));

app.listen(port);
console.log("NodeJs server started on port " + port + " successfully");