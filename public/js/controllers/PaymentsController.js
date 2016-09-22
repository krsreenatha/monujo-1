var PaymentsController = function($scope,Payments){
  $scope.title = 'Payments';
  function listPayments(){
    Payments.query(
      function(payments){
        $scope.payments = payments;
      },
      function(err){
        console.log("Unable to get payments list.");
        console.log(err);
      }
    );
  }
  
  listPayments();
};
PaymentsController.$inject = ['$scope','Payments'];

var app = angular.module('monujo');
app.controller('PaymentsController', PaymentsController);
