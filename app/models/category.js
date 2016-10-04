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
		}
	})
	
	return mongoose.model('Category', schema)
}