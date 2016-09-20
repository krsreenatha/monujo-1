var app = angular.module('monujo');

app.factory('FinancesFactory', function($resource){
  return $resource('/finances/:id')
});
