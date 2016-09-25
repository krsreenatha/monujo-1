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

	$routeProvider.when('/goals', {
		templateUrl: 'partials/goals/index.html',
		controller: 'GoalsController'
	})

	$routeProvider.when('/payments', {
		templateUrl: 'partials/payments/index.html',
		controller: 'PaymentsController'
	})

	$routeProvider.when('/categories', {
		templateUrl: 'partials/categories/index.html',
		controller: 'CategoriesController'
	})

	$routeProvider.when('/rules', {
		templateUrl: 'partials/rules/index.html',
		controller: 'RulesController'
	})

	$routeProvider.when('/reports', {
		templateUrl: 'partials/reports/index.html',
		controller: 'ReportsController'
	})

	$routeProvider.otherwise({redirectTo: '/dashboard'})

})

/*global angular:true*/
