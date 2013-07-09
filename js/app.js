"use strict"

angular.module('yz-demo', []).
  config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });

function MainCtrl($scope, $http, $location, $rootScope) {
  var setupParams = function() {
    $scope.bucket = $location.search().b;
    $scope.query = decodeURIComponent($location.search().q);
  };
  setupParams();

  $scope.search = function() {
    var query = encodeURIComponent($scope.query);
    $location.search({b: $scope.bucket, q: query});
    $http.get('/search/' + $scope.bucket + '?wt=json&rows=20&q=' + query).success(function(data) {
      $scope.error = null;
      $scope.query = data.responseHeader.params.q;
      $scope.result = data;
      $scope.docs = {};
      data.response.docs.forEach(function(doc) {
        var url = '/buckets/' + doc._yz_rb + '/keys/' + doc._yz_rk;
        $http.get(url).success(function(data) {
            $scope.docs[doc._yz_rk] = extractWikipedia(data);
        });
      })
    }).error(function(data, status) {
      $scope.result = null;
      $scope.error = 'Server returns ' + status + '. ' + data;
    });
  }

  $rootScope.$on('$locationChangeSuccess', function() {
    setupParams();
    $scope.search();
  });
}

var re = new RegExp('<title>([^<]+)</title>.*<timestamp>([^<]+)</timestamp>.*<text[^>]+>([^<]+)</text>');

function extractWikipedia(text) {
  var match = re.exec(text);
  return {
    title: match[1],
    timestamp: match[2],
    text: match[3]
  }
}
