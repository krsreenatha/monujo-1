module.exports = function(app){
	var controller = {}
	var Account = app.models.account
	
	controller.index = function(req,res){
		res.send(200)
	}

	controller.search = function(req,res){
	  var search_pattern = {
  	  'transactions._id': req.query['id'],
	    'transactions.name': req.query['name'],
	    'transactions.tags': req.query['tags'],
	    'transactions.category': req.query['category'],
	    'transactions.account_id': req.query['account'],
	    'transactions.start_date': req.query['start_date'],
	    'transactions.end_date': req.query['end_date'],
	    'transactions.review': req.query['review']
	  }
    Account.find(search_pattern).exec()
    .then(function(search){
      if(!search) throw new Error("Not found.");
      res.json(search);
    },
    function(err){
      console.error(err);
      res.status(404).json(err);
    });
	}

	return controller
}
