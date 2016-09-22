module.exports = function(app) {
	var controller = {};

	controller.index = function(req, res) {
		var goals = [{
				description: 'Bank Charges',
				value: 154.0,
				total: 154.00,
				category: 1,
				period: 1
			},

			{
				description: 'Bills & Utilities',
				value: 467.0,
				total: 467.00,
				category: 1,
				period: 1
			},

			{
				description: 'Business Expenses',
				value: 97.0,
				total: 97.00,
				category: 1,
				period: 1
			},

			{
				description: 'Credit Card',
				value: 3.0,
				total: 6.50,
				category: 1,
				period: 1
			},

			{
				description: 'Education',
				value: 5.0,
				total: 10.83,
				category: 1,
				period: 1
			},

			{
				description: 'Groceries',
				value: 325.0,
				total: 325.00,
				category: 1,
				period: 1
			},

			{
				description: 'Housing',
				value: 127.0,
				total: 275.17,
				category: 1,
				period: 1
			}
		];

		res.json(goals);
	}

	return controller;
}