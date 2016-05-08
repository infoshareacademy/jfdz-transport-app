
var planning = angular.module('planning', []);

planning.controller('planningController', function($scope, busService){

    $scope.planning = {};
    $scope.xlines = 0;
    $scope.planning.loading = true;

    $scope.success1 = function (response) {
        $scope.planning.loading = false;


        $scope.planning = {};
        $scope.planning = response.data;


        console.log(response.data);

        $scope.addLine = function() {
           console.log('Linia:',$scope.formlines);
           $scope.lines = $scope.formlines;
           $scope.day = $scope.formday;
        }

    };

    $scope.error1 = function(response){
        console.log('error', response);
        $scope.planning.error = true;
    };

    busService.getLinesFor().then($scope.success1,$scope.error1 );

});

