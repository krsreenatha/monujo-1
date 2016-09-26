var app = angular.module('monujo')
app.directive('convertToString', function(){
	return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(val) {
        return val.toString()
      })
      ngModel.$formatters.push(function(val) {
        return '' + val
      })
    }
  }
})

/*global angular:true*/
