var ReportsController = function($scope,Report){
  $scope.title = 'Reports';
  function listReports(){
    Report.query(
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
ReportsController.$inject = ['$scope','Report'];

var app = angular.module('monujo');
app.controller('ReportsController', ReportsController);
