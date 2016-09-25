module.exports = function(app){
	var controller = {}

	controller.index = function(req,res){
		var payments = [
			{
				name: 'Payment 1',
				category: 1,
				spend: 100.0,
				receive: 10.0
			},
			{
				name: 'Payment 2',
				category: 1,
				spend: 100.0,
				receive: 10.0
			},
			{
				name: 'Payment 3',
				category: 1,
				spend: 100.0,
				receive: 10.0
			},
			{
				name: 'Payment 4',
				category: 1,
				spend: 100.0,
				receive: 10.0
			}
		]
		res.json(payments)
	}

	return controller
}
