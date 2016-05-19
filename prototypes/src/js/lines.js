var lines = angular.module('lines', []);

lines.controller('LinesController', function ($scope, busService) {

    $scope.lines = function (response) {
        $scope.lines.loading = false;
        $scope.lines = response.data;

        console.log($scope.lines)
    };


    busService.getLinesFor().then($scope.lines, $scope.error1);

    $scope.error1 = function (response) {
        $scope.planning.error = true;
    };

});
