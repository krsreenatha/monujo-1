module.exports = function(app){
  var controller = app.controllers.finances;

  app.route('/finances')
    .get(controller.index);
}