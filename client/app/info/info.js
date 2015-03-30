'use strict';

angular.module('bodaJsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/info', {
        templateUrl: 'app/info/info.html',
        controller: 'InfoCtrl'
      });
  });
