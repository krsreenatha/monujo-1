var GoalsController = function($scope,Goal){
	$scope.title = 'Goals';
	function listGoals(){
		Goal.query(
			function(goals){
				$scope.goals = goals;
			},
			function(err){
				console.log('Unable to get goals list.');
				console.log(err);
			}
		);
	}
	
	$scope.saveGoals = function(){
		$scope.goals.forEach(function(goal) {
			goal.$save()
	      .then(function(){
	        $scope.message = {text: "Feito!"};
	        listGoals();
	      })
				.catch(function(err){
	        $scope.message = {text: "Não foi possível salvar."};
	        console.log(err);
	      });
		});
	};

	listGoals();
	$scope.$on('$viewContentLoaded', function() {
		$('.dropdown').dropdown();
	});
};

GoalsController.$inject = ['$scope','Goal'];

var app = angular.module('monujo');
app.controller('GoalsController', GoalsController);

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global angular $:true*/
