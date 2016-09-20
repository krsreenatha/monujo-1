var RootController = function($scope){
  $scope.title = 'Root';
};
RootController.$inject = ['$scope'];

var app = angular.module('monujo');
app.controller('RootController', RootController);
