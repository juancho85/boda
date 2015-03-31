'use strict';

angular.module('bodaJsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/asistencia', {
        templateUrl: 'app/asistencia/asistencia.html',
        controller: 'AsistenciaCtrl'
      });
  });
