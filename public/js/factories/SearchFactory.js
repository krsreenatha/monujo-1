var app = angular.module('monujo')

app.factory('Search', function($resource){
	return $resource('/search')
})

/*global angular:true*/
