module.exports = function(app){
	var controller = {}
	var Transaction = app.models.transaction

	controller.index = function(req,res){
		var transactions = [
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
		]
		res.json(transactions)
	}

	controller.getTransaction = function(req,res){
		var _id = req.params.id
		Transaction.findById(_id).exec()
		.then(function(transaction){
			if(!transaction) throw new Error('Transaction not found!')
			res.json(transaction)
		},
		function(err){
			console.error(err)
			res.status(404).json(err)
		})
	}

	controller.getTransactionsByAccount = function(req,res){
		var _account_id = req.params.id
		Transaction.find({account_id: _account_id}).exec()
		.then(function(transactions){
			if(!transactions) throw new Error('Transactions not found!')
			res.json(transactions)
		},
		function(err){
			console.error(err)
			res.status(404).json(err)
		})
	}

	return controller
}

/*eslint no-console: ["error", { allow: ["log","error"] }] */
