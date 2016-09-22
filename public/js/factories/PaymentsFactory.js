var app = angular.module('monujo');

app.factory('Payments', function($resource){
  return $resource('/payments/:id')
});
