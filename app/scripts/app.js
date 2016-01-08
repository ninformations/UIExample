'use strict';

/**
 * @ngdoc overview
 * @name uiexampleApp
 * @description
 * # uiexampleApp
 *
 * Main module of the application.
 */
angular
  .module('uiexampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/modal/demo', {
        templateUrl: 'views/modaldemo.html',
        controller: 'ModaldemoCtrl',
        controllerAs: 'modalDemo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
