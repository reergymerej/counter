(function () {
  'use strict';

  angular.module('counter', []).

  controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.best = 8;
    $scope.items = [];

    // Get the "best" from the server.  Use $http instead of $resource
    // because we're won't be doing any CRUD stuff.
    $http.get('/best').
      success(function (resp, status, headers, config) {
        $scope.best = resp;
      }).
      error(function (data, status, headers, config) {
        console.error('unable to get best');
      });

    $scope.add = function () {
      $scope.adding = true;
      
      $http.post('/item').
        success(function (resp, status, headers, config) {
          $scope.items.unshift(resp);
          $scope.adding = false;
        }).
        error(function (resp, status, headers, config) {
          console.error('unable to add item');
          $scope.adding = false;
        });
    };
  }]);
}());