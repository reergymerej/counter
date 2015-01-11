(function () {
  'use strict';

  var Item = function () {
    this.date = new Date();
  };

  angular.module('counter', [])

  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.best = 8;
    $scope.items = [];

    $scope.add = function () {
      $scope.items.unshift(new Item());
    };
  }]);
}());