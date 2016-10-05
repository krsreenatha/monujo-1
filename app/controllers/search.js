module.exports = function(app){
	var controller = {}
	var Account = app.models.account

	controller.search = function(req,res){
	  var search_pattern = {}
	  if(req.query['id'] !== undefined)
	  	search_pattern.transactions._id = req.query['id'] 
    if(req.query['name'] !== undefined)
    	search_pattern.transactions.name = req.query['name'] 
    if(req.query['tags'] !== undefined)
    	search_pattern.transactions.tags = req.query['tags'] 
    if(req.query['category'] !== undefined)
    	search_pattern.transactions.category = req.query['category'] 
    if(req.query['account'] !== undefined)
    	search_pattern.transactions.account_id = req.query['account'] 
    if(req.query['start_date'] !== undefined)
    	search_pattern.transactions.start_date = req.query['start_date'] 
    if(req.query['end_date'] !== undefined)
    	search_pattern.transactions.end_date = req.query['end_date'] 
    if(req.query['review'] !== undefined)
    	search_pattern.transactions.review = req.query['review'] 
    	
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
