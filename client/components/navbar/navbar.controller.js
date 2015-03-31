'use strict';

angular.module('bodaJsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {
        'title': 'Info práctica',
        'link': '/info'
      },
      {
        'title': 'Confirmación asistencia',
        'link': '/asistencia'
      },
      {
        'title': 'Viaje de bodas',
        'link': '/viaje'
      }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
