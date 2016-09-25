module.exports = function(app){
	var controller = app.controllers.index

	app.get('/', function(req, res){
		res.render('index')
	})

	return controller
}
