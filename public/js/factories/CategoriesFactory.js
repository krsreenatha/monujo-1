var app = angular.module('monujo');

app.factory('Category', function($resource){
  return $resource('/categories/:id')
});
