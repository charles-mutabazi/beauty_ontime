// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Saloon = require('../models/saloon');
var Service = require('../models/service');
var Booking = require('../models/booking');

// Routes
router.get('/', function(req, res){
	res.send('API Documentation will go here')
});

Saloon.methods(['get','put','post','delete']);
Saloon.register(router, '/saloons');

Service.methods(['get','put','post','delete']);
Service.register(router, '/services');

Booking.methods(['get','put','post','delete']);
Booking.register(router, '/bookings');

// Return router as module
module.exports = router