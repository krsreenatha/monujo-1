var app = angular.module('monujo');

app.factory('Goals', function($resource){
  return $resource('/goals/:id')
});
