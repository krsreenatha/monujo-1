var app = angular.module('monujo');

app.factory('Categories', function($resource){
  return $resource('/categories/:id')
});
