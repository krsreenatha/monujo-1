var express = require("express");
var bodyParser = require("body-parser");
var load = require("express-load");

module.exports = function(){
  var app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('ip', process.env.IP || 'localhost');
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  app.get('*', function(req,res){
    res.status(404).render('404');
  });

  return app;
}
