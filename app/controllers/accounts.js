module.exports = function(app){
	var controller = {}
	var Account = app.models.account

	controller.index = function(req,res){
		var promise = Account.find().exec()
    .then(function(accounts){
      res.json(accounts)
    },
    function(err){
      console.error(err)
      res.status(504).json(err)
    })
	}

	controller.getAccount = function(req,res){
		var _id = req.params.id
		Account.findById(_id).exec()
		.then(function(account){
			if(!account) throw new Error('Account not found!')
			res.json(account)
		},
		function(err){
			console.error(err)
			res.status(404).json(err)
		})
	}
	
	controller.save = function(req,res){
    var _id = req.body._id;
    var data = {
    	'name': req.body.name,
			'number': req.body.number,
			'type': req.body.type
    };
    if(_id){
      Account.findByIdAndUpdate(_id, data).exec()
      .then(function(account){
        res.json(account);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
    else{
      Account.create(data)
      .then(function(account){
        res.status(201).json(account);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
	}

	return controller
}

/*eslint no-console: ["error", { allow: ["log","error"] }] */
