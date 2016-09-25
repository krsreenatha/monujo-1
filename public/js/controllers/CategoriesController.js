var CategoriesController = function($scope,Category){
	$scope.title = 'Categories'
	function listCategories(){
		Category.query(
			function(categories){
				$scope.categories = categories
			},
			function(err){
				console.log('Unable to get categories list.')
				console.log(err)
			}
		)
	}

	listCategories()
}
CategoriesController.$inject = ['$scope','Category']

var app = angular.module('monujo')
app.controller('CategoriesController', CategoriesController)

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global angular:true*/
