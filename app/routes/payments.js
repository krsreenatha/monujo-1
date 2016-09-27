module.exports = function(app){
	var controller = app.controllers.payments

	app.route('/payments')
		.get(controller.index)
		.post(controller.save)
}
