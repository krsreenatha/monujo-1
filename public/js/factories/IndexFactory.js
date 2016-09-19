var app = angular('monujo');

app.factory('Index', function($resource){
  return $resource('/');
});