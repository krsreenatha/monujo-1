var GoalsController = function($scope,Goal){
  $scope.title = 'Goals';
  function listGoals(){
    Goal.query(
      function(goals){
        $scope.goals = goals;
      },
      function(err){
        console.log("Unable to get goals list.");
        console.log(err);
      }
    );
  }

  listGoals();
};
GoalsController.$inject = ['$scope','Goal'];

var app = angular.module('monujo');
app.controller('GoalsController', GoalsController);
