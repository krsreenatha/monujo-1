var app = require('./config/express')();

app.get('/', function(req,res){
	res.render('index');
});

app.listen(app.get('port'), app.get('ip'));