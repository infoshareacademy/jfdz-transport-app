var lines = angular.module('lines', []);

lines.controller('LinesController', function ($scope, busService) {

    $scope.lines = function (response) {
        $scope.lines.loading = false;
        $scope.lines = response.data;


        $scope.lines.bus = response.data.line;
        console.log($scope.lines.bus);

        // var x = $scope.lines.destination;
        // $scope.lines.bus = x.forEach(function(item){
        //     console.log(item)
        // });

        console.log($scope.lines)
    };


    busService.getLinesFor().then($scope.lines, $scope.error1);

    $scope.error1 = function (response) {
        $scope.planning.error = true;
    };

});
