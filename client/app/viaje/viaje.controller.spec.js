'use strict';

describe('Controller: ViajeCtrl', function () {

  // load the controller's module
  beforeEach(module('bodaJsApp'));

  var ViajeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViajeCtrl = $controller('ViajeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
