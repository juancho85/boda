'use strict';

angular.module('bodaJsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
      {
        image: 'assets/images/paris2.jpg',
        text: 'Paris 2'
      }
      ,
      {
        image: 'assets/images/paris3.jpg',
        text: 'Paris 3'
      }
    ];
  });
