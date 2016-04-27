var app = angular.module("app", []);

app.controller('HomeCtrl', function ($scope) {
    console.log("Home Controller!");
    $scope.name = 'Agnieszko';
});
app.controller('ExampleController', ['$scope', '$http', '$log', function($scope, $http, $log) {

    $scope.busesName = [];

    $http.get('http://isa-api.herokuapp.com/transport/stops.json')
        .success(function (data, status, headers, config) {

            $scope.busesName = data;
            $log.info('Działa!');

        })
        .error(function (data, status, headers, config) {

            $log.error('Wystąpił błąd '+status+' podczas pobierania listy przystanków!');

        });

    //$scope.data =
    //    //{
    //    //    repeatSelect: null,
    //    //    availableOptions:
    //[
    //            {
    //                "id": 0,
    //                "name": "100",
    //                "stops": [
    //                    {"id": 21, "name": "Belgradzka"},
    //                    {"id": 70, "name": "CioĹkowskiego"},
    //                    { "id": 44,"name": "Bursztynowa"},
    //                    {"id": 30,"name": "Bogatka I"}
    //                    ]
    //            }
    //            //{id: '101', name: 'Kołobrzeska'},
    //            //{id: '201', name: 'Zakopiańska'},
    //            //{id: '301', name: 'Gdańska'}
    //        ]
        //};
    }]);

app.controller('StopsCtrl', function ($scope, $http) {
    $http.get("http://isa-api.herokuapp.com/transport/lines.json").success(function (data) {
        $scope.lines = data;
        console.log(data[0].stops[1]);
        console.log(data[0].dTimes[1]);
    });
});
