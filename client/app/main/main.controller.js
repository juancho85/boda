'use strict';

angular.module('bodaJsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [
      {
        image: 'assets/paris2.jpg',
        text: 'Paris 2'
      }
      ,
      {
        image: 'assets/paris3.jpg',
        text: 'Paris 3'
      }
    ];
    //$scope.addSlide = function() {
    //  var newWidth = 600 + slides.length + 1;
    //  slides.push({
    //    image: 'http://placekitten.com/' + newWidth + '/300',
    //    text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    //    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    //  });
    //};
    //for (var i=0; i<4; i++) {
    //  $scope.addSlide();
    //}
    //$scope.awesomeThings = [];
    //
    //$http.get('/api/things').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //});
    //
    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};
  });
