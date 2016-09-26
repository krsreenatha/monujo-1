var mongoose = require("mongoose")

module.exports = function(app){
	var schema = mongoose.Schema({
		description: {
			type: String,
			required: true
		},
		value: {
			type: Number,
			required: true
		},
		total: {
			type: Number,
			required: true
		},
		category: {
			type: Number,
			required: true
		},
		period: {
			type: Number,
			required: true
		}
	})
	
	return mongoose.model('Goal', schema)
}