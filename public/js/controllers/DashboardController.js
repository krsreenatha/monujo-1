var DashboardController = function($scope,Goal,Account){
	$scope.title = 'Dashboard'
	function listDashboard(){
		Goal.query(
			function(goals){
				$scope.goals = goals
			},
			function(err){
				console.log('Unable to get goals list.')
				console.log(err)
			}
		)
		Account.query(
			function(accounts){
				$scope.accounts = accounts
			},
			function(err){
				console.log('Unable to get accounts list.')
				console.log(err)
			}
		)
	}

	listDashboard()
}
DashboardController.$inject = ['$scope','Goal','Account']

var app = angular.module('monujo')
app.controller('DashboardController', DashboardController)

/*eslint no-console: ['error', { allow: ['log'] }] */
/*global angular:true*/
