var express = require("express");
var app = express();
var port = process.env.port || 5000;
var mongoose = require("mongoose");
var config = require('./config'); // get our config file
var bodyParser = require("body-parser");

// =======================
// models ================      // models to be loaded before interpretation of routes
// ======================= 
var Task = require("./api/modules/todoList/models/todoListModel.js");
var User = require("./api/modules/users/models/userModel.js");

// =======================
// configuration =========
// =======================
app.listen(port);

// MongoDB Data connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =======================
// routes ================
// =======================
app.get('/', (req, res) => {
	res.send("Hello World. This is a ToDo List App");
});


app.use('/api', require('./api/modules/login/routes/loginRoute'));

// User resource HTTP verbs
app.use('/api/users', require('./api/modules/users/routes/userRoute'));

// User Task resource HTTP verbs
app.use('/api', require('./api/modules/todoList/routes/todoListRoute'));


console.log("NodeJs server started on port " + port + " successfully");

module.exports = app;