var app = angular.module('monujo');

app.factory('IndexFactory', function($resource){
  return $resource('/')
});
