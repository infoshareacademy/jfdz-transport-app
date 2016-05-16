var myApp = angular.module('myApp', []);
myApp.controller('SampleController', function ($scope, $http, $filter, $busService) {
    $http.get('http://isa-api.herokuapp.com/transport/lines.json').then(function (res) {
        $scope.lines = res.data;
        $http.get('http://isa-api.herokuapp.com/transport/stops.json').then(function (res1) {
            $scope.stops = res1.data;
        });
    });

    $scope.$watch('stopsFilter.stops', function () {
        if ($scope.stopsFilter) {
            var filteredLines = $filter('filter')($scope.lines, $scope.stopsFilter);
            $scope.filteredLines = [];

            filteredLines.forEach(function (line) {
                var indexOfSelectedStop;
                line.stops.forEach(function (stop) {
                    if (stop.id == $scope.stopsFilter.stops) {
                        indexOfSelectedStop = line.stops.indexOf(stop);
                    }
                });

                console.log(indexOfSelectedStop);

                var seconds = 0;
                for (var i = 0; i <= indexOfSelectedStop; i++) {
                    seconds += line.dTimes[i];
                }

                console.log('sumaryczny czas', seconds);

//                        var hoursToAdd = seconds departure.hour;
//                        var minutesToAdd = departure.minutes + dTimes / 60;
//                        var secondsToAdd = departure.seconds + dTimes % 60;


//                        var seconds = 9999;
// multiply by 1000 because Date() requires miliseconds
                var date = new Date(seconds * 1000);
                var hh = date.getUTCHours();
                var mm = date.getUTCMinutes();
                var ss = date.getSeconds();
// If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
// if (hh > 12) {hh = hh % 12;}
// These lines ensure you have two-digits
                if (hh < 10) {
                    hh = "0" + hh;
                }
                if (mm < 10) {
                    mm = "0" + mm;
                }
                if (ss < 10) {
                    ss = "0" + ss;
                }
// This formats your string to HH:MM:SS
                var t = hh + ":" + mm + ":" + ss;
                console.log(t);

                var departures = [];
                line.departures.forEach(function (departure) {
                    departures.push({
                        hours: departure.hour,
                        minutes: departure.minutes,
                        seconds: departure.seconds
                    });
                });

                var line = {
                    firstStop: line.stops[0].name,
                    lastStop: line.stops[line.stops.length - 1].name,
                    lineNo: line.name,
                    departures: departures
                };
                $scope.filteredLines.push(line);
            });


            console.log($scope.filteredLines);
        }
    });
});