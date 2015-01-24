angular.module('app.dashboard', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/templates/dashboard.html'
    });
  }])

  .controller('DashboardCtrl', ['$scope', function($scope) {
    $scope.toggleSidebar = function() {
      $scope.toggle = !$scope.toggle;
    };
  }]);
