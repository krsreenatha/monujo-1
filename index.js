var app = require('./config/express')()
require('./config/database')('mongodb://localhost/monujo')

app.get('/', function(req, res){
	res.send('Hello World')
})

app.listen(app.get('port'), app.get('ip'), function(){
	console.log('Listening on: ' + app.get('ip'))
})

/*eslint no-console: ["error", { allow: ["log"] }] */
