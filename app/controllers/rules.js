module.exports = function(app){
	var controller = {}

	controller.index = function(req,res){
		var rules = [
			{
				contains: '',
				name: 'Bank Charges',
				category: 1,
				tags: '',
				flag: 1
			},
			{
				contains: '',
				name: 'Bills & Utilities',
				category: 1,
				tags: '',
				flag: 1
			},
			{
				contains: '',
				name: 'Business Expenses',
				category: 1,
				tags: '',
				flag: 1
			},
			{
				contains: '',
				name: 'Credit Card',
				category: 1,
				tags: '',
				flag: 1
			}
		]
		res.json(rules)
	}

	return controller
}
