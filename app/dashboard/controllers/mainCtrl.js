angular.module('app.dashboard')

  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.toggleSidebar = function() {
      $scope.toggle = !$scope.toggle;
    };
  }]);
