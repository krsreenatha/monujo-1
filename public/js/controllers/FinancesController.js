var FinancesController = function($scope){
  $scope.total = 0;
};
FinancesController.$inject = ['$scope'];

var app = angular.module('monujo');
app.controller('FinancesController', FinancesController);
