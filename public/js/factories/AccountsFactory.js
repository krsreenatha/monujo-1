var app = angular.module('monujo');

app.factory('Account', function($resource){
  return $resource('/accounts/:id')
});
