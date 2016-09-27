var mongoose = require("mongoose")

module.exports = function(app){
	var schema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		category: {
			type: Number,
			required: true
		},
		spend: {
			type: Number,
			required: true
		},
		receive: {
			type: Number,
			required: true
		}
	})
	
	return mongoose.model('Payment', schema)
}