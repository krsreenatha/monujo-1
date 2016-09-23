module.exports = function(app){
	var controller = app.controllers.accounts
	
	app.route('/accounts')
		.get(controller.index);
	
	app.route('/accounts/:id')
		.get(controller.getAccount);
}