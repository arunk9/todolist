'use strict';

var express = require("express");
var app = express();

var port = process.env.port || 5000;


app.listen(port);
console.log("NodeJs server started on port " + port + " successfully");