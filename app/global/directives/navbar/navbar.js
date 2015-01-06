angular.module('app.global', [])
  .directive('navbar', function () {
    var config = {
      restrict:'E',
      replace: false,
      templateUrl: 'global/directives/navbar/navbar.html',
      scope: true,
      controller: ['$scope', controller]
    };

    function controller($scope) {
      // Collapsed by default
      $scope.isCollapsed = true;
    }

    return config;
  });