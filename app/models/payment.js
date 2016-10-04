var mongoose = require("mongoose")

module.exports = function(app){
	var schema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		type: {
			type: Number,
			required: true
		},
		amount: {
			type: Number,
			required: true
		},
		category: {
			type: Number,
			required: true
		},
		date: {
			type: Date,
			required: true
		}
	})
	
	return mongoose.model('Payment', schema)
}