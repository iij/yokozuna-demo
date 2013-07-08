"use strict"

function MainCtrl($scope, $http) {
  $scope.bucket = "test";

  $scope.search = function() {
    var query = encodeURIComponent($scope.query);
    $http.get('/search/' + $scope.bucket + '?wt=json&rows=20&q=' + query).success(function(data) {
      $scope.error = null;
      $scope.query = data.responseHeader.params.q;
      $scope.result = data;
      $scope.docs = {};
      data.response.docs.forEach(function(doc) {
        var url = '/buckets/' + doc._yz_rb + '/keys/' + doc._yz_rk;
        $http.get(url).success(function(data) {
            $scope.docs[doc._yz_rk] = data;
        });
      })
    }).error(function(data, status) {
      $scope.result = null;
      $scope.error = 'Server returns ' + status + '. ' + data;
    });
  }
}
