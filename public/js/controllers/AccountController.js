var app = angular.module('monujo');

app.controller('AccountController', function($scope, $routeParams, Account){
    if($routeParams.account_id){
      Account.get({id: $routeParams.account_id},
        function(account){
          $scope.account = account;
        },
        function(err){
          $scope.message = {text: "Unable to get account."};
          console.log(err);
        }
      );
    }
    else{
      $scope.account = new Account();
    }

    $scope.salvar = function(){
      $scope.account.$save()
        .then(function(){
          $scope.message = {text: "Feito!"};
          $scope.account = new Account();
          window.setTimeout(function(){
            window.location = "#/";
          },3000);
        })
        .catch(function(err){
          $scope.message = {text: "Unable to save."};
          console.log(err);
        });
    };
});
