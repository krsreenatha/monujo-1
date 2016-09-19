var app = angular.module('monujo', ['ngRoute','ngResource']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'partials/index.html',
      controller: 'IndexController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});