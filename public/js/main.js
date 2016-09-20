var app = angular.module('monujo', ['ngRoute','ngResource']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'partials/root.html',
      controller: 'RootController'
    });

    $routeProvider.when('/finances', {
      templateUrl: 'partials/finances.html',
      controller: 'FinancesController'
    });

    $routeProvider.otherwise({redirectTo: '/finances'});
});
