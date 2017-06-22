var SearchController = function($scope,Search){
	$scope.title = 'Search';
	$scope.performSearch = function performSearch(){
		Search.query(
			function(results){
				$scope.results = results;
			},
			function(err){
				console.log('Unable to get transactions list.');
				console.log(err);
			});
	};
	$scope.$on('$viewContentLoaded', function() {
		$('.dropdown').dropdown();
	});
	$scope.performSearch();
};

SearchController.$inject = ['$scope','Search'];

var app = angular.module('monujo');
app.controller('SearchController', SearchController);

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global $ angular:true*/
