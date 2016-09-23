var app = angular.module('monujo');

app.factory('Rules', function($resource){
  return $resource('/rules/:id')
});
