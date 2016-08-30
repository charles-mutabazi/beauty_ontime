// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var saloonSchema = mongoose.Schema({
	name: String,
	address: String,
	mobile: String,
	email: String,
	description: String,
	activated: Boolean,
	logo: String,
	services: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Service'
	}]
});

// Return model
module.exports = restful.model('Saloon', saloonSchema)
