var FinancesController = function($scope,Finances){
  $scope.title = 'Finances';
  function listFinances(){
    Finances.query(
      function(finances){
        $scope.finances = finances;
      },
      function(err){
        console.log("Unable to get finances list.");
        console.log(err);
      }
    );
  }
  
  listFinances();
};
FinancesController.$inject = ['$scope','Finances'];

var app = angular.module('monujo');
app.controller('FinancesController', FinancesController);
