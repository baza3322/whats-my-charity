angular.module('TweenMax', [])
  .factory('TweenMax', ['$window', function($window) {
    return $window.TweenMax;
  }]);
