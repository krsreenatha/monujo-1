module.exports = function(app){
	var controller = {};

	controller.getFinances = function(req,res){
		var output = [
			{
				id: 1,
				bank: '',
				income: 200,
				flag: 'Visa',
				number: 0001
			},
			{
				id: 2,
				bank: '',
				income: 150,
				flag: 'Visa',
				number: 0002
			},
			{
				id: 3,
				bank: '',
				income: 500,
				flag: 'Master',
				number: 0003
			},
			{
				id: 4,
				bank: '',
				income: 20,
				flag: 'Elo',
				number: 0004
			}
		];
		res.json(output);
	}

	return controller;
}
