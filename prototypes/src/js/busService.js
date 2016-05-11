var buses = angular.module('buses',[]);
buses.constant('linesAPI', 'http://isa-api-sl.herokuapp.com/api/busLines');
buses.constant('stopsAPI', 'http://isa-api-sl.herokuapp.com/api/busStops');

buses.service('busService', function($http, linesAPI, stopsAPI){

    this.getLinesFor = function() {
        var urlLines = linesAPI;

        return $http({
            method: 'GET',
            url: urlLines
        })
    };
    this.getStopsFor = function() {
        var urlStops = stopsAPI;

        return $http({
            method: 'GET',
            url: urlStops
        })
    }
});
