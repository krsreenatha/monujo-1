var mongoose = require('mongoose')

module.exports = function(){
	var schema = mongoose.Schema({
		account_id: {
			type: Number,
			required: true
		},
		date: {
			type: Date,
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
		spent: {
			type: Number,
			required: true
		},
		received: {
			type: Number,
			required: true
		}
	})

	return mongoose.model('Transaction', schema)
}
