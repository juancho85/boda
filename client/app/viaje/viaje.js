'use strict';

angular.module('bodaJsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/viaje', {
        templateUrl: 'app/viaje/viaje.html',
        controller: 'ViajeCtrl'
      });
  });
