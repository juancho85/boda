'use strict';

describe('Directive: maps', function () {

  // load the directive's module and view
  beforeEach(module('bodaJsApp'));
  beforeEach(module('app/maps/maps.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<maps></maps>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the maps directive');
  }));
});