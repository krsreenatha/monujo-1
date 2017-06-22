var app = angular.module('monujo');

app.controller('RuleController', function($scope,$routeParams,Rule){
	if($routeParams.rule_id){
      Rule.get({id: $routeParams.rule_id},
        function(rule){
          $scope.rule = rule;
        },
        function(err){
          $scope.message = {text: "Unable to get rule."};
          console.log(err);
        }
      );
    }
    else{
      $scope.rule = new Rule();
    }

    $scope.save = function(){
      $scope.rule.$save()
        .then(function(){
          $scope.message = {text: "Done!"};
          $scope.rule = new Rule();
          window.setTimeout(function(){
            window.location = "#/rules";
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
