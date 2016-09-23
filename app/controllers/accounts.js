module.exports = function(app){
	var controller = {};
	
	controller.index = function(req,res){
		var accounts = [
			{
				name: 'Bank Charges',
				number: 1,
				type: 1
			},
			{
				name: 'Bills & Utilities',
				number: 1,
				type: 1
			},
			{
				name: 'Business Expenses',
				number: 1,
				type: 1
			},
			{
				name: 'Credit Card',
				number: 1,
				type: 1
			}
		];
		res.json(accounts);
	}
	
	controller.getAccount = function(req,res){
		
	}
	
	return controller;
}