var mongoose = require("mongoose");

module.exports = function(app){
	var schema = mongoose.Schema({
		contains: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		category: {
			type: Number,
			required: true
		},
		flag_match: {
			type: Boolean,
			required: true
		},
		tags: {
			type: [String],
			required: true
		}
	});
	
	return mongoose.model('Rule', schema);
}