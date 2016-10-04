module.exports = function(app){
	var controller = app.controllers.rules

	app.route('/rules')
		.get(controller.index)
		.post(controller.save)
}
