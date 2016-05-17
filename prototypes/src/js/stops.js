var mystops = angular.module('mystops', []);
mystops.controller('StopsController', function ($scope, $http, $filter, busService) {

    // busService.getLinesFor().then(function (res) {
    //     $scope.lines = res.data;
    //     busService.getStopsFor().then(function (res1) {
    //         $scope.stops = res1.data;
    //     });
    // });

    //$scope.myStops = {};
    $scope.stops = function (resStops) {

        $scope.stopsx = resStops.data;
        $scope.mystops = [];
        $scope.$watch('stopsFilter', function (item) {

            console.log($scope.stopsFilter);

            if (item != undefined) {


                //czas zamiana

                var czas = new Date();
                var time = '0710';
                var h = time.slice(0, 2);
                var m = time.slice(2, 4);

                czas.setHours(h);
                czas.setMinutes(m);

                var hours = czas.getHours();
                var minutes = czas.getMinutes();

                console.log('godzina', hours + ':' + minutes);

                $scope.mstops = [];
                var x = $scope.stopsx[item].bus;
                x.forEach(function (line) {
                    $scope.mstops.push(line);
                });

                
                $scope.addstops = function () {

                    $scope.mystops.push($scope.stopsFilter);
                    $scope.showstops = $scope.mystops;

                };

            }


        });
    };

    $scope.error1 = function (response) {
        console.log('error', response);
        $scope.planning.error = true;
    };
    $scope.error2 = function (response) {
        console.log('error', resStops);
        $scope.planning.error = true;
    };

    busService.getStopsFor().then($scope.stops, $scope.error2);


});

// v. Agi i Kamili

//     $scope.$watch('stopsFilter.stops', function () {
//
//         $scope.filteredLines = [];
//         if ($scope.stopsFilter) {
//             var filteredLines = $filter('filter')($scope.lines, $scope.stopsFilter);
//             filteredLines.forEach(function (line) {
//                 var indexOfSelectedStop;
//                 line.stops.forEach(function (stop) {
//                     if (stop.id == $scope.stopsFilter.stops) {
//                         indexOfSelectedStop = line.stops.indexOf(stop);
//                     }
//                 });
//
//                 console.log(indexOfSelectedStop);
//
//                 var seconds = 0;
//                 for (var i = 0; i <= indexOfSelectedStop; i++) {
//                     seconds += line.dTimes[i];
//                 }
//
//                 console.log('sumaryczny czas', seconds);
//
// //                        var hoursToAdd = seconds departure.hour;
// //                        var minutesToAdd = departure.minutes + dTimes / 60;
// //                        var secondsToAdd = departure.seconds + dTimes % 60;
//
//
// //                        var seconds = 9999;
// // multiply by 1000 because Date() requires miliseconds
//                 var date = new Date(seconds * 1000);
//                 var hh = date.getUTCHours();
//                 var mm = date.getUTCMinutes();
//                 var ss = date.getSeconds();
// // If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
// // if (hh > 12) {hh = hh % 12;}
// // These lines ensure you have two-digits
//                 if (hh < 10) {
//                     hh = "0" + hh;
//                 }
//                 if (mm < 10) {
//                     mm = "0" + mm;
//                 }
//                 if (ss < 10) {
//                     ss = "0" + ss;
//                 }
// // This formats your string to HH:MM:SS
//                 var t = hh + ":" + mm + ":" + ss;
//                 console.log(t);
//
//                 var departures = [];
//                 line.departures.forEach(function (departure) {
//                     departures.push({
//                         hours: departure.hour,
//                         minutes: departure.minutes,
//                         seconds: departure.seconds
//                     });
//                 });
//                 var line = [];
//                 line = {
//                     firstStop: line.stops[0].name,
//                     lastStop: line.stops[line.stops.length - 1].name,
//                     lineNo: line.name,
//                     departures: departures
//                 };
//                 $scope.filteredLines.push(line);
//             });
//
//
//
//             console.log($scope.filteredLines);
//         }
//     });
//});