"use strict"

function MainCtrl($scope, $http) {
  $scope.search = function() {
    var query = encodeURIComponent($scope.query);
    $http.get('/search/test?wt=json&q=' + query).success(function(data) {
      $scope.query = data.responseHeader.params.q;
      $scope.result = data;
      $scope.docs = {};
      data.response.docs.forEach(function(doc) {
        var url = '/buckets/' + doc._yz_rb + '/keys/' + doc._yz_rk;
        $http.get(url).success(function(data) {
            $scope.docs[doc._yz_rk] = data;
        });
      })
    });
  }
}
