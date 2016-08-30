// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var portNumber = 3000

// MongoDB
mongoose.connect('mongodb://localhost/beauty_dev');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'))

//start server
app.listen(portNumber);
console.log('Server running... PORT: ' + portNumber);