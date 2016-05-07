//https://docs.angularjs.org/api/ng/filter/filter?p0=ExampleController&p1=not%20a%20function,%20got%20undefined
//http://jsfiddle.net/migontech/gbW8Z/5/
//http://jsfiddle.net/3qvyrjgt/

var app = angular.module("app", []);

app.controller('HomeCtrl', function ($scope) {
    console.log("Home Controller!");
    $scope.name = 'Agnieszka C';
});

$(document).ready(function() {
    $('#dp1').datepicker({
        format: 'mm-dd-yyyy'
    });
});
