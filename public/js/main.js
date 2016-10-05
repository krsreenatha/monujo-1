var app = angular.module('monujo', ['ngRoute','ngResource'])

app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'partials/index.html',
		controller: 'IndexController'
	})

	$routeProvider.when('/dashboard', {
		templateUrl: 'partials/dashboard/index.html',
		controller: 'DashboardController'
	})

	$routeProvider.when('/accounts/:account_id', {
		templateUrl: 'partials/account/index.html',
		controller: 'AccountController'
	})

	$routeProvider.when('/accounts/:account_id/edit', {
		templateUrl: 'partials/account/form.html',
		controller: 'AccountController'
	})

	$routeProvider.when('/goals', {
		templateUrl: 'partials/goals/index.html',
		controller: 'GoalsController'
	})

	$routeProvider.when('/payments', {
		templateUrl: 'partials/payments/index.html',
		controller: 'PaymentsController'
	})

	$routeProvider.when('/payments/new', {
		templateUrl: 'partials/payments/form.html',
		controller: 'PaymentController'
	})

	$routeProvider.when('/categories', {
		templateUrl: 'partials/categories/index.html',
		controller: 'CategoriesController'
	})

	$routeProvider.when('/categories/new', {
		templateUrl: 'partials/categories/form.html',
		controller: 'CategoryController'
	})

	$routeProvider.when('/rules', {
		templateUrl: 'partials/rules/index.html',
		controller: 'RulesController'
	})

	$routeProvider.when('/rules/new', {
		templateUrl: 'partials/rules/form.html',
		controller: 'RuleController'
	})

	$routeProvider.when('/reports', {
		templateUrl: 'partials/reports/index.html',
		controller: 'ReportsController'
	})

	$routeProvider.when('/search', {
		templateUrl: 'partials/search/index.html',
		controller: 'SearchController'
	})

	$routeProvider.otherwise({redirectTo: '/dashboard'})

})

app.controller('GlobalController', function($scope,Account){
	function getAccounts(){
		Account.query(
			function(accounts){
				$scope.accounts = accounts
			},
			function(err){
				console.log('Unable to get accounts list.')
				console.log(err)
			})
	}
	
	getAccounts()
	$scope.$on('$viewContentLoaded', function() {
		$('.dropdown').dropdown()
	})
})

/*global angular $:true*/
