var PaymentsController = function($scope,Payment){
	$scope.title = 'Payments';
	function listPayments(){
		Payment.query(
			function(payments){
				$scope.payments = payments;
			},
			function(err){
				console.log('Unable to get payments list.');
				console.log(err);
			}
		);
	}

	listPayments();
};

PaymentsController.$inject = ['$scope','Payment'];

var app = angular.module('monujo');
app.controller('PaymentsController', PaymentsController);

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global angular:true*/
