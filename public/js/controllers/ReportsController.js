var ReportsController = function($scope,Reports){
  $scope.title = 'Reports';
  function listReports(){
    Reports.query(
      function(reports){
        $scope.reports = reports;
      },
      function(err){
        console.log("Unable to get reports list.");
        console.log(err);
      }
    );
  }
  listReports();
};
ReportsController.$inject = ['$scope','Reports'];

var app = angular.module('monujo');
app.controller('ReportsController', ReportsController);
