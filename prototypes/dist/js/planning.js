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
                        var y = $scope.planStops[item].bus[fitem].departures;
                        //console.log($scope.planStops[item].bus[fitem].departures);
                        y.forEach(function (line) {
                            $scope.lines.push(line);
                        });
                    });
                }
            }
        });
        
        $scope.planningStage = [];
        $scope.planningStage.stage = [];
        
        $scope.addLine = function () {
            $scope.day = $scope.formday;
            $scope.tripname = $scope.formname;
            $scope.stops = $scope.formstops;
            $scope.lines = $scope.formlines;
            $scope.destination = $scope.formlines;
            $scope.time = $scope.formhours;
            //$scope.done = $scope.done;

            $scope.planningStage.push({
                tripname: $scope.tripname,
                day: $scope.day,
                stage: {
                    stops: $scope.planStops[ $scope.formstops]['name'],
                    lines: $scope.planStops[ $scope.formstops].bus[$scope.lines].line,
                    destination:$scope.planStops[ $scope.formstops].bus[$scope.lines].destination,
                    time: $scope.time,
                    done: false
                }
            });
        };

        //console.log($scope.planningStage);

        $scope.saveTrip = function () {
            localStorage.setItem('trip', JSON.stringify($scope.planningStage));
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

}).filter('stringdogodziny', function() {
    return function(input) {
        return input.replace(/(..)(..)/, '$1:$2');
    };
});

planning.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(newValue){
        this.tab = newValue;
    };
    this.isSet = function(tabName){
        return this.tab === tabName;
    };
});

planning.controller('getTripController', function($scope){
    $scope.saved = localStorage.getItem('trip');
    $scope.todos = JSON.parse($scope.saved);
    $scope.updatetripdone = function() {
        console.log($scope.done);

        // $scope.planningStage.push({
        //     tripname: $scope.tripname,
        //     day: $scope.day,
        //     stage: {
        //         stops: $scope.stops,
        //         lines: $scope.lines,
        //         time: $scope.time,
        //         done: true
        //     }
        // });
        // localStorage.setItem('trip', JSON.stringify($scope.planningStage));
    };
}).filter('stringdogodziny', function() {
    return function(input) {
        return input.replace(/(..)(..)/, '$1:$2');
    };
});

