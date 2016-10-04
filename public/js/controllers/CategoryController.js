var app = angular.module('monujo')
app.controller('CategoryController', function($scope,$routeParams,Category){
	if($routeParams.category_id){
      Category.get({id: $routeParams.category_id},
        function(category){
          $scope.category = category;
        },
        function(err){
          $scope.message = {text: "Unable to get category."};
          console.log(err);
        }
      );
    }
    else{
      $scope.category = new Category();
    }

    $scope.save = function(){
      $scope.category.$save()
        .then(function(){
          $scope.message = {text: "Done!"};
          $scope.category = new Category();
          window.setTimeout(function(){
            window.location = "#/categories";
          },3000);
        })
        .catch(function(err){
          $scope.message = {text: "Unable to save."};
          console.log(err);
        });
    };
})

/*eslint no-console: ["error", { allow: ["log"] }] */
/*global angular:true*/
