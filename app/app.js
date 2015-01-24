'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',

    'ui.bootstrap',

    'app.global',
    'app.dashboard'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/dashboard'
    });
  }]);
