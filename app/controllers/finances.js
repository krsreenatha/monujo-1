module.exports = function(app){
	var controller = {};

	controller.getIndex = function(req,res){
		res.json({'page':'index'});
	}

	return controller;
}
