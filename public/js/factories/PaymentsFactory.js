var app = angular.module('monujo');

app.factory('Payment', function($resource){
	return $resource('/payments/:id');
});

/*global angular:true*/
