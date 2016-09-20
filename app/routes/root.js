module.exports = function(app){
  var controller = app.controllers.root;

  app.route('/')
    .get(controller.index);
}
