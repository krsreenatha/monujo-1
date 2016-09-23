module.exports = function(app){
	var controller = {};
	
	controller.index = function(req,res){
		var reports = [
			{
				category: 'Bank Charges',
        spent: 100.0,
				received: 10.0
			},
			{
				category: 'Bills & Utilities',
        spent: 100.0,
				received: 10.0
			},
			{
				category: 'Business Expenses',
        spent: 100.0,
				received: 10.0
			},
			{
				category: 'Credit Card',
        spent: 100.0,
				received: 10.0
			}
		];
		res.json(reports);
	}
	
	return controller;
}