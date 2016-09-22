var CategoriesController = function($scope,Categories){
  $scope.title = 'Categories';
  function listCategories(){
    Categories.query(
      function(categories){
        $scope.categories = categories;
      },
      function(err){
        console.log("Unable to get categories list.");
        console.log(err);
      }
    );
  }
  
  listCategories();
};
CategoriesController.$inject = ['$scope','Categories'];

var app = angular.module('monujo');
app.controller('CategoriesController', CategoriesController);
