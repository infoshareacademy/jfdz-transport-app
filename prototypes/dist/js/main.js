<<<<<<< .merge_file_4TGiCr
//https://docs.angularjs.org/api/ng/filter/filter?p0=ExampleController&p1=not%20a%20function,%20got%20undefined
//http://jsfiddle.net/migontech/gbW8Z/5/
//http://jsfiddle.net/3qvyrjgt/

var app = angular.module("app", []);

app.controller('HomeCtrl', function ($scope) {
    console.log("Home Controller!");
    $scope.name = 'Agnieszka C';
});

app.controller('MainCtrl', function($scope) {
    $scope.q = 3;
    $scope.myList = [{
        id: "obj1", content: [{id: 1, name: 'attr 1'},
            {id: 2, name: 'attr 2'},
            {id: 3,name: 'attr 2'}]},
        {id: "obj2", content: [{id: 4, name: 'attr 3'},
            {id: 5, name: 'attr 5'},
            {id: 6, name: 'attr 6'}]},
        {id: "obj3", content: [{id: 3, name: 'attr 7'},
            {id: 8, name: 'attr 8'},
            {id: 9, name: 'attr 9'}]}];
});


app.filter('ExampleController', function() {
    return function(input, id) {
        var i=0, len=input.length;
        for (; i<len; i++) {
            if (+input[i].busNumber == +id) {
                return input[i];
            }
        }
        return null;
    }
});

app.filter('expenditurePayeeFilter', [function ($filter) {
    return function (inputArray, searchCriteria, txnType) {
        if (!angular.isDefined(searchCriteria) || searchCriteria == '') {
            return inputArray;
        }
        var data = [];
        angular.forEach(inputArray, function (item) {
            if (item.txnType == txnType) {
                if (item.payee.name.toLowerCase().indexOf(searchCriteria.toLowerCase()) != -1) {
                    data.push(item);
                }
            }
        });
        return data;
    };
}]);


app.controller('ExampleController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.data = {
        repeatSelect: null,
        availableOptions: [
            {busNumber: '101', name: 'Kołobrzeska'},
            {busNumber: '201', name: 'Zakopiańska'},
            {busNumber: '301', name: 'Gdańska'}
        ],
    };
    $scope.showdetails = function (busNumber) {
        var found = $filter('getById')($scope.data, busNumber);
        console.log(found);
        $scope.selected = JSON.stringify(found);
    }

}]);

app.controller('StopsCtrl', function ($scope, $http) {
    $http.get("http://isa-api.herokuapp.com/transport/lines.json").success(function (data) {
        $scope.lines = data;
        console.log(data[0].stops[1]);
        console.log(data[0].dTimes[1]);
    });
});

$(document).ready(function() {
    $('#dp1').datepicker({
        format: 'mm-dd-yyyy'
    });
=======
console.log('Hello');
console.log('Test');

$(function () {
    app.login.main.init();

>>>>>>> .merge_file_cZJgQr
});