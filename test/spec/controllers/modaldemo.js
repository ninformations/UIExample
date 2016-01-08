'use strict';

describe('Controller: ModaldemoCtrl', function () {

  // load the controller's module
  beforeEach(module('uiexampleApp'));

  var ModaldemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModaldemoCtrl = $controller('ModaldemoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModaldemoCtrl.awesomeThings.length).toBe(3);
  });
});
