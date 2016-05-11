
var planning = angular.module('planning', []);

planning.controller('planningController', function($scope, busService){

    $scope.planning = {};
    $scope.planning.loading = true;

    $scope.lines = function (response) {
        $scope.planning.loading = false;
        $scope.planning = response.data;
        console.log(response.data);
    };

    $scope.planStops = {};

    $scope.stops = function(resStops) {
        $scope.planStops = resStops.data;

        $scope.addLine = function() {
            $scope.day = $scope.formday;
            $scope.lines = $scope.formstops;
        }

    };

    $scope.error1 = function(response){
        console.log('error', response);
        $scope.planning.error = true;
    };
    $scope.error2 = function(response){
        console.log('error', resStops);
        $scope.planning.error = true;
    };

    busService.getLinesFor().then($scope.lines,$scope.error1 );
    busService.getStopsFor().then($scope.stops,$scope.error2);

});

