
var planning = angular.module('planning', []);

planning.controller('planningController', function($scope, busService){

    $scope.planning = {};
    $scope.planning.loading = true;

    $scope.lines = function (response) {
        $scope.planning.loading = false;
        $scope.planning = response.data;
    };

    $scope.planStops = {};

    $scope.stops = function(resStops) {
        $scope.planStops = resStops.data;


        $scope.$watch('formstops', function (item) {

            if (item != undefined) {
                console.log(item);
                var id = item;

                $scope.buses = [];

                var x = $scope.planStops[id].bus;
                x.forEach(function (line) {
                    console.log(line);
                    $scope.buses.push(line);
                });

                
            }



        });
        



      //  console.log($scope.planStops[0].bus[0]);

        $scope.addLine = function() {
            $scope.day = $scope.formday;
            $scope.stops = $scope.formstops;
            $scope.lines = $scope.formlines;
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

