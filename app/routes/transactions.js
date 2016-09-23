module.exports = function(app){
	var controller = app.controllers.transactions
	
	app.route('/transactions')
		.get(controller.index);
	
	app.route('/transactions/:id')
		.get(controller.getTransaction);
	
	app.route('/transactions/account/:id')
		.get(controller.getTransactionsByAccount);
}