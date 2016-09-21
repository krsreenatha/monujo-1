var app = angular.module('monujo');

app.factory('Finances', function($resource){
  return $resource('/finances/:id')
});
