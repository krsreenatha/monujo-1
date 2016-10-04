module.exports = function(app){
	var controller = {}
	var Payment = app.models.payment

	controller.index = function(req,res){
		var promise = Payment.find().exec()
    .then(function(payments){
      res.json(payments)
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
			'type': req.body.type,
			'amount': req.body.amount,
			'category': req.body.category,
			'date': req.body.date
    };
    if(_id){
      Payment.findByIdAndUpdate(_id, data).exec()
      .then(function(payment){
        res.json(payment);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
    else{
      Payment.create(data)
      .then(function(payment){
        res.status(201).json(payment);
      },
      function(err){
        console.error(err);
        res.status(500).json(err);
      });
    }
	}

	return controller
}
