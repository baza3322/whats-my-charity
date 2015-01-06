'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',

  'app.global',
  'app.home',
  'app.settings',
  'app.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
