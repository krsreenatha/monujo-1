var app = angular.module('monujo')

app.factory('Goal', function($resource){
	return $resource('/goals/:id')
})

/*global angular:true*/
