var app = angular.module('monujo');

app.factory('Report', function($resource){
	return $resource('/reports/:id');
});

/*global angular:true*/
