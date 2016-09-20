var IndexController = function($scope){
  $scope.title = 'Index';
};
IndexController.$inject = ['$scope'];

var app = angular.module('monujo');
app.controller('IndexController', IndexController);
