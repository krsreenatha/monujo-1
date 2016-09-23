var RulesController = function($scope,Rules){
  $scope.title = 'Rules';
  function listRules(){
    Rules.query(
      function(rules){
        $scope.rules = rules;
      },
      function(err){
        console.log("Unable to get rules list.");
        console.log(err);
      }
    );
  }
  $scope.$on('$viewContentLoaded', function() {
    $('.dropdown').dropdown();
  });
  listRules();
};
RulesController.$inject = ['$scope','Rules'];

var app = angular.module('monujo');
app.controller('RulesController', RulesController);
