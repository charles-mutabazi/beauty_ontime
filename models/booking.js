// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var bookingSchema = mongoose.Schema({
	name: String,
	time: String,
	mobile: String,
	status: Boolean,
	services: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Service'
	}]
});

// Return model
module.exports = restful.model('Booking', bookingSchema)