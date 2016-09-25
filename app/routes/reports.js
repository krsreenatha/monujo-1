module.exports = function(app){
	var controller = app.controllers.reports

	app.route('/reports')
		.get(controller.index)
}
