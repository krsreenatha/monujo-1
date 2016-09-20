module.exports = function(app){
	var controller = {};

	controller.index = function(req,res){
		return res.json({'name': 'Teste'});
	}

	return controller;
}
