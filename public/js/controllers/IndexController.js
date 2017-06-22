var IndexController = function($scope,Account){
	$scope.title = 'Index';
};

IndexController.$inject = ['$scope','Account'];

var app = angular.module('monujo');
app.controller('IndexController', IndexController);

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global angular:true*/
