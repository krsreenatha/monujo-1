module.exports = function(app){
	var controller = app.controllers.goals

	app.route('/goals')
		.get(controller.index)
}
