module.exports = function(app){
	var controller = {};

	controller.getIndex = function(req,res){
		res.render('index');
	}

	return controller;
}
