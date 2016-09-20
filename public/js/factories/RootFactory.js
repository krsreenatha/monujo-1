var app = angular('monujo');

app.factory('Root', function($resource){
  return $resource('/');
});
