var mongoose = require('mongoose')

module.exports = function(){
	var schema = mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		surname: {
			type: String,
			required: true
		},
		cpf: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		phone: {
			type: String,
			required: false
		},
		username: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: false
		}
	})

	return mongoose.model('User', schema)
}
