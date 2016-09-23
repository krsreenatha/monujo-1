var DashboardController = function($scope,Goals,Accounts){
  $scope.title = 'Dashboard';
  function listDashboard(){
    Goals.query(
      function(goals){
        $scope.goals = goals;
      },
      function(err){
        console.log("Unable to get goals list.");
        console.log(err);
      }
    );
    Accounts.query(
      function(accounts){
        $scope.accounts = accounts;
      },
      function(err){
        console.log("Unable to get accounts list.");
        console.log(err);
      }
    );
  }
  
  listDashboard();
};
DashboardController.$inject = ['$scope','Goals','Accounts'];

var app = angular.module('monujo');
app.controller('DashboardController', DashboardController);
