var app = angular.module('monujo');

app.factory('Accounts', function($resource){
  return $resource('/accounts/:id')
});
