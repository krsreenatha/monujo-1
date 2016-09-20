var IndexController = function($scope){
  $scope.title = 'Index';
  $scope.bills = [
  	{
  		title: 'Bill 1',
  		amount: 300,
  		date: new Date(2016, 09, 09)
  	},
  	{
  		title: 'Bill 2',
  		amount: 350,
  		date: new Date(2016, 09, 09)
  	},
  	{
  		title: 'Bill 3',
  		amount: 500,
  		date: new Date(2016, 09, 09)
  	},
  	{
  		title: 'Bill 4',
  		amount: 600,
  		date: new Date(2016, 09, 09)
  	}
	];
};
IndexController.$inject = ['$scope'];

var app = angular.module('monujo');
app.controller('IndexController', IndexController);
