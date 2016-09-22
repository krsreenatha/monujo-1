var GoalsController = function($scope,Goals){
  $scope.title = 'Goals';
  function listGoals(){
    Goals.query(
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
GoalsController.$inject = ['$scope','Goals'];

var app = angular.module('monujo');
app.controller('GoalsController', GoalsController);
