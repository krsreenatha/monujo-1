module.exports = function(app){
	var controller = {};

	controller.getIndex = function(req,res){
		console.log('finances');
		res.render('index');
	}

	return controller;
}
