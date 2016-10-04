module.exports = function(app){
	var controller = {}
	var Rule = app.models.rule

	controller.index = function(req,res){
		var promise = Rule.find().exec()
    .then(function(rules){
      res.json(rules)
    },
    function(err){
      console.error(err)
      res.status(504).json(err)
    })
	}
	
	controller.save = function(req,res){
    var _id = req.body._id;
    var data = {
			'contains': req.body.contains,
    	'name': req.body.name,
			'category': req.body.category,
			'flag_match': req.body.flag_match,
			'tags': req.body.tags
    };
    if(_id){
      Rule.findByIdAndUpdate(_id, data).exec()
      .then(function(rule){
        res.json(rule);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
    else{
      Rule.create(data)
      .then(function(rule){
        res.status(201).json(rule);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
	}

	return controller
}
