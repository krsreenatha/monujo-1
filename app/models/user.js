var mongoose = require('mongoose');

module.exports = function(){
  var schema = mongoose.Schema({
    name: {
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
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  });

  return mongoose.model('User', schema);
}