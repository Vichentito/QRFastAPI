'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
		id: String,
		name: String,
		description: String,
		image: String
});

module.exports = mongoose.model('productos', ProductoSchema);