// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var serviceSchema = mongoose.Schema({
	name: String,
	description: String
});

// Return model
module.exports = restful.model('Service', serviceSchema)