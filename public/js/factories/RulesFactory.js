var app = angular.module('monujo');

app.factory('Rule', function($resource){
	return $resource('/rules/:id');
});

/*global angular:true*/
