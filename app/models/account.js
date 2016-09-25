var mongoose = require('mongoose')

module.exports = function(app){
	var Transaction = app.models.transaction
	var schema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		number: {
			type: Number,
			required: true
		},
		type: {
			type: Number,
			required: true
		},
		transactions: {
			type: [Transaction]
		}
	})

	return mongoose.model('Account', schema)
}
