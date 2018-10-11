var express = require("express");
var app = express();
var port = process.env.port || 5000;
var mongoose = require("mongoose");

var Task = require("./api/modules/todoList/models/todoListModel.js");
var bodyParser = require("body-parser");

app.listen(port);

// MongoDB Data connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load the todoApp api routes
var routes = require('./api/modules/todoList/routes/todoListRoute.js');

//register the route
routes(app);


// welcome page
app.get('/', (req, res) => {
	res.send("Hello World. This is a ToDo List App");
});

console.log("NodeJs server started on port " + port + " successfully");