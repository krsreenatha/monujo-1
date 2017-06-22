var RulesController = function($scope,Rule){
	$scope.title = 'Rules';
	function listRules(){
		Rule.query(
			function(rules){
				$scope.rules = rules;
			},
			function(err){
				console.log('Unable to get rules list.');
				console.log(err);
			});
	}
	
	$scope.$on('$viewContentLoaded', function() {
		$('.dropdown').dropdown();
	});
	
	listRules();
};

RulesController.$inject = ['$scope','Rule'];

var app = angular.module('monujo');
app.controller('RulesController', RulesController);

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global $ angular:true*/
