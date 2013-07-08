"use strict"

function MainCtrl($scope, $http) {
  $scope.search = function() {
    var query = encodeURIComponent($scope.query);
    $http.get('/search/test?wt=json&q=' + query).success(function(data) {
      $scope.query = data.responseHeader.params.q;
      $scope.result = data;
    });
  }
}
