module.exports = function(app){
	var controller = app.controllers.categories

	app.route('/categories')
		.get(controller.index)
}
