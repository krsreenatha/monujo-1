module.exports = function(app){
	var controller = {}
	var Category = app.models.category

	controller.index = function(req,res){
		var promise = Category.find().exec()
    .then(function(categories){
      res.json(categories)
    },
    function(err){
      console.error(err)
      res.status(504).json(err)
    })
	}
	
	controller.save = function(req,res){
    var _id = req.body._id;
    var data = {
    	'name': req.body.name,
			'type': req.body.type
    };
    if(_id){
      Category.findByIdAndUpdate(_id, data).exec()
      .then(function(category){
        res.json(category);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
    else{
      Category.create(data)
      .then(function(category){
        res.status(201).json(category);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
	}

	return controller
}
