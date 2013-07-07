"use strict"

function MainCtrl($scope, $http) {
  $scope.search = function() {
    $http.get('/search/test?wt=json&q=' + $scope.query).success(function(data) {
      $scope.query = data.responseHeader.params.q;
      $scope.result = data;
    });
  }
}
