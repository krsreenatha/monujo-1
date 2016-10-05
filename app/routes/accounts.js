module.exports = function(app){
	var controller = app.controllers.accounts

	app.route('/accounts')
		.get(controller.index)
		.post(controller.save)

	app.route('/accounts/:id')
		.get(controller.getAccount)
}
