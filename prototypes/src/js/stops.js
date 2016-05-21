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

        $scope.changeTime = function($event) {

            $scope.downloadTime = angular.element($event.target).data('id');

            console.log($scope.downloadTime);
            //$scope.hours = $scope.downloadTime;
            var czas = new Date();
            var time = $scope.downloadTime;
            var h = time.slice(0, 2);
            var m = time.slice(2, 4);

            czas.setHours(h);
            czas.setMinutes(m);

            var hours = czas.getHours();
            var minutes = czas.getMinutes();

            console.log('godzina', hours + ':' + minutes);
        };

        $scope.$watch('stopsFilter', function (item) {

            $scope.czasAktualny = new Date();
            


            if (item != undefined) {

                $scope.mstops = [];
                var x = $scope.stopsx[item].bus;
                x.forEach(function (line) {
                    $scope.mstops.push(line);
                });

                $scope.addstops = function () {
                    $scope.mystops.push({
                        id: $scope.stopsx[item].id,
                        name: $scope.stopsx[item].name,
                        bus: $scope.stopsx[item].bus
                    });
                    console.log($scope.mystops);
                    localStorage.setItem('mystops', JSON.stringify($scope.mystops));
                };
            }
        });
        $scope.mystops = [];
        angular.forEach($scope.mystops, function(item){
            //$scope.xsline =  $scope.stopsx[item];
        });
        
        $scope.savedstops = JSON.parse(localStorage.getItem('mystops'));
        
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


}).filter('stringdogodziny', function() {
    return function(input) {
        return input.replace(/(..)(..)/, '$1:$2');
    };
});
