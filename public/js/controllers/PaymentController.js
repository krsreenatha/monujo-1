var app = angular.module('monujo');

app.controller('PaymentController', function($scope,$routeParams,Payment){
	if($routeParams.payment_id){
    Payment.get({id: $routeParams.payment_id},
      function(payment){
        $scope.payment = payment;
      },
      function(err){
        $scope.message = {text: "Unable to get payment."};
        console.log(err);
      });
  }
  else{
    $scope.payment = new Payment();
  }

  $scope.save = function(){
    $scope.payment.$save()
      .then(function(){
        $scope.message = {text: "Done!"};
        $scope.payment = new Payment();
        window.setTimeout(function(){
          window.location = "#/payments";
        },3000);
      })
      .catch(function(err){
        $scope.message = {text: "Unable to save."};
        console.log(err);
      });
  };
});

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global angular:true*/
