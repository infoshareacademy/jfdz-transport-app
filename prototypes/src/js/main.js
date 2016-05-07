//https://docs.angularjs.org/api/ng/filter/filter?p0=ExampleController&p1=not%20a%20function,%20got%20undefined
//http://jsfiddle.net/migontech/gbW8Z/5/
//http://jsfiddle.net/3qvyrjgt/

var app = angular.module("app", []);

app.controller('HomeCtrl', function ($scope) {
    console.log("Home Controller!");
    $scope.name = 'Agnieszka C';
})
//app.controller('ExampleController', ['$scope', '$http', '$log', function($scope, $http, $log) {
//
//    $scope.busesStops = [];
//    $scope.busesLines =[];
//
//    $http.get('http://isa-api.herokuapp.com/transport/stops.json')
//        .success(function (data, status, headers, config) {
//
//            $scope.busesStops = data;
//            $log.info('Działa!');
//
//        })
//        .error(function (data, status, headers, config) {
//            $log.error('Wystąpił błąd '+status+' podczas pobierania listy przystanków!');
//        });
//
//    $http.get('http://isa-api.herokuapp.com/transport/lines.json')
//    .success(function (data, status, headers, config) {
//
//        $scope.busesLines = data;
//        $log.info('Działa 2!');
//
//    })
//        .error(function (data, status, headers, config) {
//            $log.error('Wystąpił błąd '+status+' podczas pobierania listy lini!');
//        });

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




$(document).ready(function() {
    $('#dp1').datepicker({
        format: 'mm-dd-yyyy'
    });
});
