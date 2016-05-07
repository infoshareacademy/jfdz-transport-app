var planning = angular.module('planning',[]);

planning.constant('planningAPI', 'http://isa-api.herokuapp.com/transport/lines.json');

planning.service('planningService', function($http, planningAPI){

    this.getPlanningFor = function() {
        var url = planningAPI;

        return $http({
            method: 'GET',
            url: url
        })
    }
});


planning.controller('planningController', function($scope, planningService){
    $scope.planning = {};
    $scope.planning.loading = true;

    $scope.success1 = function (response) {

        $scope.planning.loading = false;
        $scope.planning.name = response.data.name;

        console.log(response);

    };

    $scope.error1 = function(response){
        console.log('error', response);
        $scope.planning.error = true;
    };

    planningService.getPlanningFor().then($scope.success1,$scope.error1 );

});

