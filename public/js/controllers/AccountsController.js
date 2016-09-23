var AccountsController = function($scope,Accounts){
  $scope.title = 'Accounts';
  function listAccounts(){
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
  
  listAccounts();
};
AccountsController.$inject = ['$scope','Accounts'];

var app = angular.module('monujo');
app.controller('AccountsController', AccountsController);
