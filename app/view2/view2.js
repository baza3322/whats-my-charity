'use strict';

angular.module('myApp.settings', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/settings', {
    templateUrl: 'view2/view2.html',
    controller: 'SettingsCtrl'
  });
}])

.controller('SettingsCtrl', [function() {

}]);