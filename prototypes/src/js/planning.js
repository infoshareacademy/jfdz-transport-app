var planning = angular.module('planning', []);

planning.controller('planningController', function ($scope, busService) {

    $scope.planning = {};
    $scope.planning.loading = true;

    $scope.lines = function (response) {
        $scope.planning.loading = false;
        $scope.planning = response.data;
    };

    $scope.planStops = {};

    $scope.stops = function (resStops) {
        $scope.planStops = resStops.data;


        $scope.$watch('formstops', function (item) {

            if (item != undefined) {
                $scope.buses = [];
                var x = $scope.planStops[item].bus;
                x.forEach(function (line) {
                    $scope.buses.push(line);
                });
                if (item != undefined) {
                    $scope.$watch('formlines', function (fitem) {
                        $scope.lines = [];
                        var y = $scope.planStops[item].bus[fitem];
                        console.log($scope.planStops[item].bus[fitem].departures);
                        y.forEach(function (line) {
                            $scope.lines.push(line);
                        });
                        console.log($scope.lines);
                    });
                }
            }
        });


        $scope.planningStage = [];

        $scope.addLine = function () {
            $scope.day = $scope.formday;
            $scope.stops = $scope.formstops;
            $scope.lines = $scope.formlines;
            $scope.time = $scope.formhours;
            $scope.planningStage.push({
                day: $scope.day,
                stops: $scope.stops,
                lines: $scope.lines,
                time: $scope.time
            });
            //console.log($scope.planningStage);

        }


    };

    $scope.error1 = function (response) {
        console.log('error', response);
        $scope.planning.error = true;
    };
    $scope.error2 = function (response) {
        console.log('error', resStops);
        $scope.planning.error = true;
    };

    busService.getLinesFor().then($scope.lines, $scope.error1);
    busService.getStopsFor().then($scope.stops, $scope.error2);

});

