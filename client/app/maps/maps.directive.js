'use strict';

angular.module('bodaJsApp')
  .directive('map', function () {
    //TODO: refactor to make it reusable
    return {
      restrict: 'E',
      replace: true,
      template: '<div></div>',
      link: function(scope, element, attrs) {
        console.log(element);

        var options = {
          center: {
            lat: 40.413917,
            lng: -3.735271
          },
          zoom: 16,
          disableDefaultUI: false,
          scrollwheel: true,
          draggable: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL
          },
          panControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          }
        }
        var map = new google.maps.Map(document.getElementById(attrs.id), options);
        var marker = new google.maps.Marker({
          position: {
            lat: 40.413917,
            lng: -3.735271
          },
          map: map,
          title:"Boda Mara y Juancho!",
          icon: 'assets/images/wedding.png'
        });
      } //end addMarker
    };
  });
