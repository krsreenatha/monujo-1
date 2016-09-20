module.exports = function(app){
  var controller = {};

  app.get('/', function(req, res){
      res.render('index');
  });

  return controller;
}
