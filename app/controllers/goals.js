module.exports = function(app) {
	var controller = {}
	var Goal = app.models.goal

	controller.index = function(req, res) {
		var promise = Goal.find().exec()
    .then(function(goals){
      res.json(goals)
    },
    function(err){
      console.error(err)
      res.status(504).json(err)
    })
	}
	
	controller.save = function(req,res){
		var _id = req.body._id
    var data = {
    	'description': req.body.description,
			'value': req.body.value,
			'total': req.body.total,
			'category': req.body.category,
			'period': req.body.period
    }
    if(_id){
      Goal.findByIdAndUpdate(_id, data).exec()
      .then(function(goal){
        res.json(goal)
      },
      function(err){
        console.error(err)
        res.status(500).json(err)
      })
    }
    else{
      Goal.create(data)
      .then(function(goal){
        res.status(201).json(goal)
      },
      function(err){
        console.error(err)
        res.status(500).json(err)
      })
    }
	}

	return controller
}
