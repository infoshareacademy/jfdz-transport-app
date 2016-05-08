var buses = angular.module('buses',[]);
buses.constant('linesAPI', 'http://isa-api.herokuapp.com/transport/lines.json');
buses.constant('stopsAPI', 'http://isa-api.herokuapp.com/transport/stops.json');

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
