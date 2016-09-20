var app = angular('monujo');

app.factory('Finances', function($resource){
  return $resource('/finances');
});
