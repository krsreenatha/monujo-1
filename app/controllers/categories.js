module.exports = function(app){
	var controller = {}

	controller.index = function(req,res){
		var categories = [
			{
				name: 'Bank Charges',
				type: 1
			},
			{
				name: 'Bills & Utilities',
				type: 1
			},
			{
				name: 'Business Expenses',
				type: 1
			},
			{
				name: 'Credit Card',
				type: 1
			}
		]
		res.json(categories)
	}

	return controller
}
