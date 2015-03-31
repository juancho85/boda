'use strict';

angular.module('bodaJsApp')
  .controller('AsistenciaCtrl', function ($scope, $http) {
    //$scope.arrival = new Date(2015, 5, 5);
    //$scope.departure = new Date(2015, 5, 7);
    $scope.formats = ['dd/MM/yyyy', 'yyyy/MM/dd', 'dd-MMMM-yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    //$scope.arrival = new Date(2015, 5, 5);
    //$scope.departure = new Date(2015, 5, 7);

    $scope.newAsistencia = {};
    $scope.newAsistencia.isAssisting = true;

    $scope.clear = function () {
      $scope.newAsistencia.arrivalDate = null;
      $scope.newAsistencia.departureDate = null;
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.aopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.aopened = true;
    };

    $scope.dopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.dopened = true;
    };

    $scope.getAsistencias = function(){
      console.log('getAsistencias called');
      $http.get('/api/asistencias').success(function(asistencias) {
        //console.log('asistencias received '+ asistencias);
        //console.log('asistencias[0].name '+ asistencias[0].name);
        //console.log('asistencias[0].isAssisting '+ asistencias[0].isAssisting);
        //console.log('asistencias[0].arrivalDate '+ asistencias[0].arrivalDate);
        //console.log('asistencias[0].departureDate '+ asistencias[0].departureDate);
        $scope.asistencias = asistencias;
      });
    };

    $scope.getAsistencias();

    $scope.addAsistencia = function() {
      if($scope.newAsistencia === '') {
        return;
      }
      $http.post('/api/asistencias', $scope.newAsistencia );
      $scope.newAsistencia = '';
      $scope.getAsistencias();
    };

    $scope.deleteAsistencia = function(asistencia) {
      $http.delete('/api/asistencias/' + asistencia._id);
      $scope.getAsistencias();
    };

  });
