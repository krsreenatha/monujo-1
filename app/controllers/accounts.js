module.exports = function(app){
	var controller = {};
	var Account = app.models.account;
	
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
		var _id = req.params.id;
    Account.findById(_id).exec()
	    .then(function(account){
	      if(!account) throw new Error("Account not found!");
	      res.json(account);
	    },
	    function(err){
	      console.error(err);
	      res.status(404).json(err);
	    });
	}
	
	return controller;
}