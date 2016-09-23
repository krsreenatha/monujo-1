var app = angular.module('monujo');

app.factory('Reports', function($resource){
  return $resource('/reports/:id')
});
