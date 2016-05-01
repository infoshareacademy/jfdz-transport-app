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

//var myApp = angular.module('myApp',[]);
app.controller('busStopSearch', function ($scope) {
    $scope.busStops = [
        {id: 11, name: "Bajki", pos: {x: 0, y: 70}},
        {id: 40, name: "Buczka", pos: {x: 1, y: 16}},
        {id: 68, name: "Ciasna", pos: {x: 2, y: 23}},
        {id: 34, name: "Brama Oliwska", pos: {x: 3, y: 17}},
        {id: 52, name: "Chałubińskiego", pos: {x: 4, y: 11}},
        {id: 21, name: "Belgradzka", pos: {x: 4, y: 74}},
        {id: 70, name: "Ciołkowskiego", pos: {x: 6, y: 8}},
        {id: 20, name: "BCB Azymutalna", pos: {x: 9, y: 75}}
        //{id: 1, name: 'Cash'},
        //{id: 2, name: 'Bank Savings'}
    ];
    $scope.payees = [
        {id: '1', name: 'HouseRent', txnType: 'EXPENDITURE'},
        {id: '2', name: 'InternetBill', txnType: 'EXPENDITURE'},
        {id: '3', name: 'PowerBill', txnType: 'EXPENDITURE'},
        {id: '4', name: 'Salary', txnType: 'INCOME'}
    ];
    $scope.transactions = [
        {id: '1', txnType: 'EXPENDITURE', amount: 1000, account: $scope.busStops[0], payee: $scope.payees[0]},
        {id: '2', txnType: 'EXPENDITURE', amount: 500, account: $scope.busStops[1], payee: $scope.payees[1]},
        {id: '3', txnType: 'EXPENDITURE', amount: 1200, account: $scope.busStops[2], payee: $scope.payees[1]},
        {id: '4', txnType: 'INCOME', amount: 5000, account: $scope.busStops[3], payee: $scope.payees[3]},
        {id: '5', txnType: 'EXPENDITURE', amount: 200, account: $scope.busStops[3], payee: $scope.payees[2]}
    ];
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


var busStop = [
    {id: 11, name: "Bajki", pos: {x: 0, y: 70}},
    {id: 40, name: "Buczka", pos: {x: 1, y: 16}},
    {id: 68, name: "Ciasna", pos: {x: 2, y: 23}},
    {id: 34, name: "Brama Oliwska", pos: {x: 3, y: 17}},
    {id: 52, name: "Chałubińskiego", pos: {x: 4, y: 11}},
    {id: 21, name: "Belgradzka", pos: {x: 4, y: 74}},
    {id: 70, name: "CioÅ‚kowskiego", pos: {x: 6, y: 8}},
    {id: 20, name: "BCB Azymutalna", pos: {x: 9, y: 75}},
    {
        id: 50,
        name: "Centrum Nadawcze RTV",
        pos: {
            x: 13,
            y: 44
        }
    },
    {
        id: 72,
        name: "Cmentarz Åostowicki",
        pos: {
            x: 13,
            y: 68
        }
    },
    {
        id: 44,
        name: "Bursztynowa",
        pos: {
            x: 14,
            y: 41
        }
    },
    {
        id: 14,
        name: "Banino - Pszenna",
        pos: {
            x: 15,
            y: 52
        }
    },
    {
        id: 60,
        name: "Chmielna",
        pos: {
            x: 17,
            y: 7
        }
    },
    {
        id: 30,
        name: "Bogatka I",
        pos: {
            x: 18,
            y: 30
        }
    },
    {
        id: 38,
        name: "BrÄ™towo PKM",
        pos: {
            x: 20,
            y: 64
        }
    },
    {
        id: 46,
        name: "Bysewska",
        pos: {
            x: 22,
            y: 67
        }
    },
    {
        id: 73,
        name: "Cmentarz Oliwski",
        pos: {
            x: 25,
            y: 38
        }
    },
    {
        id: 79,
        name: "CzyÅ¼ewskiego",
        pos: {
            x: 25,
            y: 62
        }
    },
    {
        id: 77,
        name: "CzermiÅ„skiego",
        pos: {
            x: 27,
            y: 12
        }
    },
    {
        id: 48,
        name: "Centrostal",
        pos: {
            x: 28,
            y: 95
        }
    },
    {
        id: 45,
        name: "Bysewo",
        pos: {
            x: 29,
            y: 7
        }
    },
    {
        id: 36,
        name: "Brama Å»uÅ‚awska",
        pos: {
            x: 30,
            y: 26
        }
    },
    {
        id: 7,
        name: "Archikatedra Oliwska",
        pos: {
            x: 30,
            y: 53
        }
    },
    {
        id: 53,
        name: "Charpentiera WisÅ‚oujÅ›cie",
        pos: {
            x: 32,
            y: 98
        }
    },
    {
        id: 1,
        name: "Agrarna",
        pos: {
            x: 33,
            y: 15
        }
    },
    {
        id: 0,
        name: "Abrahama",
        pos: {
            x: 35,
            y: 88
        }
    },
    {
        id: 57,
        name: "ChÅ‚odna",
        pos: {
            x: 39,
            y: 59
        }
    },
    {
        id: 27,
        name: "BÅ‚onia",
        pos: {
            x: 43,
            y: 28
        }
    },
    {
        id: 62,
        name: "Chrzanowskiego",
        pos: {
            x: 43,
            y: 85
        }
    },
    {
        id: 76,
        name: "Czarny DwÃ³r",
        pos: {
            x: 45,
            y: 43
        }
    },
    {
        id: 54,
        name: "CheÅ‚m - WiÄ™ckowskiego",
        pos: {
            x: 46,
            y: 15
        }
    },
    {
        id: 24,
        name: "Benzynowa",
        pos: {
            x: 48,
            y: 63
        }
    },
    {
        id: 28,
        name: "Bobrowa",
        pos: {
            x: 51,
            y: 16
        }
    },
    {
        id: 59,
        name: "ChÅ‚opska - ObroÅ„cÃ³w WybrzeÅ¼a",
        pos: {
            x: 52,
            y: 48
        }
    },
    {
        id: 16,
        name: "Barniewicka",
        pos: {
            x: 53,
            y: 75
        }
    },
    {
        id: 29,
        name: "Bogatka",
        pos: {
            x: 54,
            y: 41
        }
    },
    {
        id: 15,
        name: "Banino - SzkoÅ‚a",
        pos: {
            x: 54,
            y: 42
        }
    },
    {
        id: 33,
        name: "Bora Komorowskiego",
        pos: {
            x: 54,
            y: 63
        }
    },
    {
        id: 65,
        name: "Chwaszczyno Oliwska",
        pos: {
            x: 55,
            y: 49
        }
    },
    {
        id: 26,
        name: "Biwakowa",
        pos: {
            x: 55,
            y: 58
        }
    },
    {
        id: 42,
        name: "Budowlanych",
        pos: {
            x: 55,
            y: 76
        }
    },
    {
        id: 8,
        name: "Arctowskiego",
        pos: {
            x: 55,
            y: 96
        }
    },
    {
        id: 2,
        name: "Akademia Muzyczna",
        pos: {
            x: 56,
            y: 10
        }
    },
    {
        id: 58,
        name: "ChÅ‚opska",
        pos: {
            x: 57,
            y: 21
        }
    },
    {
        id: 9,
        name: "AstronautÃ³w",
        pos: {
            x: 57,
            y: 57
        }
    },
    {
        id: 55,
        name: "CheÅ‚m Cienista",
        pos: {
            x: 58,
            y: 29
        }
    },
    {
        id: 32,
        name: "Boguckiego",
        pos: {
            x: 58,
            y: 68
        }
    },
    {
        id: 66,
        name: "Chwaszczyno Szmaragdowa",
        pos: {
            x: 59,
            y: 23
        }
    },
    {
        id: 4,
        name: "al. Hallera",
        pos: {
            x: 66,
            y: 1
        }
    },
    {
        id: 51,
        name: "Centrum Onkologii",
        pos: {
            x: 66,
            y: 95
        }
    },
    {
        id: 13,
        name: "Banino - Borowiecka",
        pos: {
            x: 70,
            y: 77
        }
    },
    {
        id: 47,
        name: "Cebertowicza",
        pos: {
            x: 71,
            y: 21
        }
    },
    {
        id: 17,
        name: "BaÅ›niowa",
        pos: {
            x: 71,
            y: 81
        }
    },
    {
        id: 5,
        name: "AmberExpo",
        pos: {
            x: 71,
            y: 85
        }
    },
    {
        id: 43,
        name: "Budzysza",
        pos: {
            x: 72,
            y: 77
        }
    },
    {
        id: 69,
        name: "CieszyÅ„skiego",
        pos: {
            x: 72,
            y: 84
        }
    },
    {
        id: 25,
        name: "Biblioteka GÅ‚Ã³wna UG",
        pos: {
            x: 73,
            y: 75
        }
    },
    {
        id: 19,
        name: "BaÅ¼yÅ„skiego",
        pos: {
            x: 73,
            y: 81
        }
    },
    {
        id: 6,
        name: "Amundsena",
        pos: {
            x: 73,
            y: 81
        }
    },
    {
        id: 56,
        name: "CheÅ‚m Witosa",
        pos: {
            x: 77,
            y: 68
        }
    },
    {
        id: 49,
        name: "Centrum Medycyny Inwazyjnej",
        pos: {
            x: 79,
            y: 69
        }
    },
    {
        id: 31,
        name: "Bogatka II",
        pos: {
            x: 81,
            y: 35
        }
    },
    {
        id: 63,
        name: "Chwaszczyno",
        pos: {
            x: 81,
            y: 63
        }
    },
    {
        id: 61,
        name: "Chodowieckiego",
        pos: {
            x: 81,
            y: 79
        }
    },
    {
        id: 37,
        name: "Bratki",
        pos: {
            x: 82,
            y: 38
        }
    },
    {
        id: 3,
        name: "Aksamitna",
        pos: {
            x: 83,
            y: 6
        }
    },
    {
        id: 78,
        name: "Czerwony DwÃ³r",
        pos: {
            x: 83,
            y: 14
        }
    },
    {
        id: 74,
        name: "CygaÅ„ska GÃ³ra",
        pos: {
            x: 83,
            y: 79
        }
    },
    {
        id: 35,
        name: "Brama WyÅ¼ynna",
        pos: {
            x: 84,
            y: 3
        }
    },
    {
        id: 39,
        name: "BrzeÅºno",
        pos: {
            x: 85,
            y: 5
        }
    },
    {
        id: 10,
        name: "Bajana",
        pos: {
            x: 86,
            y: 10
        }
    },
    {
        id: 75,
        name: "CystersÃ³w",
        pos: {
            x: 89,
            y: 40
        }
    },
    {
        id: 23,
        name: "Beniowskiego",
        pos: {
            x: 91,
            y: 22
        }
    },
    {
        id: 41,
        name: "BudapesztaÅ„ska",
        pos: {
            x: 93,
            y: 24
        }
    },
    {
        id: 18,
        name: "Baza Manipulacyjna",
        pos: {
            x: 97,
            y: 10
        }
    },
    {
        id: 22,
        name: "Bema",
        pos: {
            x: 97,
            y: 38
        }
    },
    {
        id: 12,
        name: "Banino",
        pos: {
            x: 97,
            y: 74
        }
    },
    {
        id: 64,
        name: "Chwaszczyno GdyÅ„ska",
        pos: {
            x: 97,
            y: 91
        }
    },
    {
        id: 71,
        name: "Cmentarna",
        pos: {
            x: 98,
            y: 39
        }
    },
    {
        id: 67,
        name: "Chwaszczyno Wiejska",
        pos: {
            x: 98,
            y: 44
        }
    }
];
var Lines = [
    {
        "id": 0, "name": "100",
        "stops": [{
            "id": 21, "name": "Belgradzka"
        },
            {"id": 70, "name": "CioĹkowskiego"},
            {"id": 44, "name": "Bursztynowa"},
            {
                "id": 30,
                "name": "Bogatka I"
            },
            {
                "id": 46,
                "name": "Bysewska"
            },
            {
                "id": 79,
                "name": "CzyĹźewskiego"
            },
            {
                "id": 48,
                "name": "Centrostal"
            },
            {
                "id": 53,
                "name": "Charpentiera WisĹoujĹcie"
            },
            {
                "id": 1,
                "name": "Agrarna"
            },
            {
                "id": 57,
                "name": "ChĹodna"
            },
            {
                "id": 28,
                "name": "Bobrowa"
            },
            {
                "id": 55,
                "name": "CheĹm Cienista"
            },
            {
                "id": 32,
                "name": "Boguckiego"
            },
            {
                "id": 47,
                "name": "Cebertowicza"
            },
            {
                "id": 17,
                "name": "BaĹniowa"
            },
            {
                "id": 69,
                "name": "CieszyĹskiego"
            },
            {
                "id": 19,
                "name": "BaĹźyĹskiego"
            },
            {
                "id": 25,
                "name": "Biblioteka GĹĂłwna UG"
            },
            {
                "id": 49,
                "name": "Centrum Medycyny Inwazyjnej"
            },
            {
                "id": 37,
                "name": "Bratki"
            },
            {
                "id": 35,
                "name": "Brama WyĹźynna"
            },
            {
                "id": 10,
                "name": "Bajana"
            },
            {
                "id": 18,
                "name": "Baza Manipulacyjna"
            },
            {
                "id": 71,
                "name": "Cmentarna"
            },
            {
                "id": 67,
                "name": "Chwaszczyno Wiejska"
            }
        ],
        "dTimes": [
            0,
            3075,
            1859,
            690,
            1859,
            375,
            1635,
            330,
            3795,
            2265,
            2490,
            915,
            1770,
            2715,
            2715,
            195,
            195,
            285,
            555,
            1545,
            1680,
            420,
            510,
            1365,
            240
        ],
        "departures": [
            {
                "hour": 0,
                "minutes": 14,
                "seconds": 0
            },
            {
                "hour": 5,
                "minutes": 36,
                "seconds": 0
            }
        ],
        "latencies": [
            29.525035938015208,
            3.4556726003065705
        ]
    },
    {
        "id": 1,
        "name": "101",
        "stops": [
            {
                "id": 40,
                "name": "Buczka"
            },
            {
                "id": 68,
                "name": "Ciasna"
            },
            {
                "id": 44,
                "name": "Bursztynowa"
            },
            {
                "id": 36,
                "name": "Brama ĹťuĹawska"
            },
            {
                "id": 53,
                "name": "Charpentiera WisĹoujĹcie"
            },
            {
                "id": 0,
                "name": "Abrahama"
            },
            {
                "id": 54,
                "name": "CheĹm - WiÄckowskiego"
            },
            {
                "id": 29,
                "name": "Bogatka"
            },
            {
                "id": 15,
                "name": "Banino - SzkoĹa"
            },
            {
                "id": 33,
                "name": "Bora Komorowskiego"
            },
            {
                "id": 26,
                "name": "Biwakowa"
            },
            {
                "id": 42,
                "name": "Budowlanych"
            },
            {
                "id": 8,
                "name": "Arctowskiego"
            },
            {
                "id": 9,
                "name": "AstronautĂłw"
            },
            {
                "id": 55,
                "name": "CheĹm Cienista"
            },
            {
                "id": 4,
                "name": "al. Hallera"
            },
            {
                "id": 43,
                "name": "Budzysza"
            },
            {
                "id": 69,
                "name": "CieszyĹskiego"
            },
            {
                "id": 19,
                "name": "BaĹźyĹskiego"
            },
            {
                "id": 56,
                "name": "CheĹm Witosa"
            },
            {
                "id": 78,
                "name": "Czerwony DwĂłr"
            },
            {
                "id": 3,
                "name": "Aksamitna"
            },
            {
                "id": 35,
                "name": "Brama WyĹźynna"
            },
            {
                "id": 41,
                "name": "BudapesztaĹska"
            }
        ],
        "dTimes": [
            0,
            375,
            1365,
            1410,
            3345,
            600,
            3795,
            1545,
            60,
            960,
            285,
            825,
            915,
            1859,
            1320,
            1635,
            3704,
            330,
            195,
            780,
            2715,
            375,
            195,
            1365
        ],
        "departures": [
            {
                "hour": 5,
                "minutes": 10,
                "seconds": 0
            },
            {
                "hour": 6,
                "minutes": 5,
                "seconds": 0
            },
            {
                "hour": 7,
                "minutes": 40,
                "seconds": 0
            },
            {
                "hour": 14,
                "minutes": 19,
                "seconds": 0
            },
            {
                "hour": 16,
                "minutes": 28,
                "seconds": 0
            },
            {
                "hour": 21,
                "minutes": 47,
                "seconds": 0
            }
        ],
        "latencies": [
            49.04406973021105,
            98.54982935357839,
            67.04045902634971,
            97.72831327957101,
            56.95369953732006,
            69.15333096915856
        ]
    },
    {
        "id": 2,
        "name": "102",
        "stops": [
            {
                "id": 11,
                "name": "Bajki"
            },
            {
                "id": 40,
                "name": "Buczka"
            },
            {
                "id": 21,
                "name": "Belgradzka"
            },
            {
                "id": 20,
                "name": "BCB Azymutalna"
            },
            {
                "id": 44,
                "name": "Bursztynowa"
            },
            {
                "id": 79,
                "name": "CzyĹźewskiego"
            },
            {
                "id": 48,
                "name": "Centrostal"
            },
            {
                "id": 7,
                "name": "Archikatedra Oliwska"
            },
            {
                "id": 36,
                "name": "Brama ĹťuĹawska"
            },
            {
                "id": 7,
                "name": "Archikatedra Oliwska"
            },
            {
                "id": 28,
                "name": "Bobrowa"
            },
            {
                "id": 65,
                "name": "Chwaszczyno Oliwska"
            },
            {
                "id": 26,
                "name": "Biwakowa"
            },
            {
                "id": 42,
                "name": "Budowlanych"
            },
            {
                "id": 8,
                "name": "Arctowskiego"
            },
            {
                "id": 51,
                "name": "Centrum Onkologii"
            },
            {
                "id": 13,
                "name": "Banino - Borowiecka"
            },
            {
                "id": 43,
                "name": "Budzysza"
            },
            {
                "id": 63,
                "name": "Chwaszczyno"
            },
            {
                "id": 31,
                "name": "Bogatka II"
            },
            {
                "id": 74,
                "name": "CygaĹska GĂłra"
            },
            {
                "id": 10,
                "name": "Bajana"
            },
            {
                "id": 18,
                "name": "Baza Manipulacyjna"
            },
            {
                "id": 22,
                "name": "Bema"
            },
            {
                "id": 12,
                "name": "Banino"
            }
        ],
        "dTimes": [
            0,
            2490,
            2760,
            285,
            1770,
            1455,
            1635,
            1995,
            1230,
            1230,
            2625,
            1680,
            420,
            825,
            915,
            555,
            1005,
            105,
            1050,
            1275,
            2085,
            3255,
            510,
            1275,
            1635
        ],
        "departures": [
            {
                "hour": 6,
                "minutes": 5,
                "seconds": 0
            },
            {
                "hour": 7,
                "minutes": 18,
                "seconds": 0
            },
            {
                "hour": 8,
                "minutes": 34,
                "seconds": 0
            },
            {
                "hour": 10,
                "minutes": 50,
                "seconds": 0
            },
            {
                "hour": 14,
                "minutes": 43,
                "seconds": 0
            },
            {
                "hour": 18,
                "minutes": 10,
                "seconds": 0
            },
            {
                "hour": 19,
                "minutes": 23,
                "seconds": 0
            },
            {
                "hour": 22,
                "minutes": 52,
                "seconds": 0
            },
            {
                "hour": 23,
                "minutes": 14,
                "seconds": 0
            }
        ],
        "latencies": [
            65.90354854403995,
            86.63421832281165,
            9.301634922390804,
            84.00338041735813,
            46.10493723559193,
            83.79860580712557,
            67.89366124756634,
            66.99154068692587,
            72.42961022420786
        ]
    },
    {
        "id": 3,
        "name": "103",
        "stops": [
            {
                "id": 34,
                "name": "Brama Oliwska"
            },
            {
                "id": 52,
                "name": "ChaĹubiĹskiego"
            },
            {
                "id": 21,
                "name": "Belgradzka"
            },
            {
                "id": 72,
                "name": "Cmentarz Ĺostowicki"
            },
            {
                "id": 30,
                "name": "Bogatka I"
            },
            {
                "id": 38,
                "name": "BrÄtowo PKM"
            },
            {
                "id": 48,
                "name": "Centrostal"
            },
            {
                "id": 1,
                "name": "Agrarna"
            },
            {
                "id": 76,
                "name": "Czarny DwĂłr"
            },
            {
                "id": 24,
                "name": "Benzynowa"
            },
            {
                "id": 28,
                "name": "Bobrowa"
            },
            {
                "id": 65,
                "name": "Chwaszczyno Oliwska"
            },
            {
                "id": 26,
                "name": "Biwakowa"
            },
            {
                "id": 42,
                "name": "Budowlanych"
            },
            {
                "id": 9,
                "name": "AstronautĂłw"
            },
            {
                "id": 58,
                "name": "ChĹopska"
            },
            {
                "id": 47,
                "name": "Cebertowicza"
            },
            {
                "id": 43,
                "name": "Budzysza"
            },
            {
                "id": 69,
                "name": "CieszyĹskiego"
            },
            {
                "id": 19,
                "name": "BaĹźyĹskiego"
            },
            {
                "id": 25,
                "name": "Biblioteka GĹĂłwna UG"
            },
            {
                "id": 19,
                "name": "BaĹźyĹskiego"
            },
            {
                "id": 56,
                "name": "CheĹm Witosa"
            }
        ],
        "dTimes": [
            0,
            330,
            2850,
            690,
            1950,
            1635,
            1770,
            3840,
            1815,
            1050,
            2265,
            1680,
            420,
            825,
            960,
            1635,
            645,
            2580,
            330,
            195,
            285,
            285,
            780
        ],
        "departures": [
            {
                "hour": 7,
                "minutes": 0,
                "seconds": 0
            },
            {
                "hour": 11,
                "minutes": 0,
                "seconds": 0
            }
        ],
        "latencies": [
            82.54773279326037,
            24.83244278188795
        ]
    },
    {
        "id": 4,
        "name": "104",
        "stops": [
            {
                "id": 52,
                "name": "ChaĹubiĹskiego"
            },
            {
                "id": 73,
                "name": "Cmentarz Oliwski"
            },
            {
                "id": 77,
                "name": "CzermiĹskiego"
            },
            {
                "id": 27,
                "name": "BĹonia"
            },
            {
                "id": 28,
                "name": "Bobrowa"
            },
            {
                "id": 29,
                "name": "Bogatka"
            },
            {
                "id": 15,
                "name": "Banino - SzkoĹa"
            },
            {
                "id": 65,
                "name": "Chwaszczyno Oliwska"
            },
            {
                "id": 26,
                "name": "Biwakowa"
            },
            {
                "id": 32,
                "name": "Boguckiego"
            },
            {
                "id": 47,
                "name": "Cebertowicza"
            },
            {
                "id": 31,
                "name": "Bogatka II"
            },
            {
                "id": 63,
                "name": "Chwaszczyno"
            },
            {
                "id": 61,
                "name": "Chodowieckiego"
            },
            {
                "id": 74,
                "name": "CygaĹska GĂłra"
            },
            {
                "id": 10,
                "name": "Bajana"
            },
            {
                "id": 18,
                "name": "Baza Manipulacyjna"
            },
            {
                "id": 22,
                "name": "Bema"
            },
            {
                "id": 12,
                "name": "Banino"
            }
        ],
        "dTimes": [
            0,
            2175,
            1275,
            1455,
            915,
            1275,
            60,
            375,
            420,
            600,
            2715,
            1095,
            1275,
            735,
            105,
            3255,
            510,
            1275,
            1635
        ],
        "departures": [
            {
                "hour": 2,
                "minutes": 32,
                "seconds": 0
            },
            {
                "hour": 4,
                "minutes": 0,
                "seconds": 0
            },
            {
                "hour": 6,
                "minutes": 38,
                "seconds": 0
            },
            {
                "hour": 10,
                "minutes": 13,
                "seconds": 0
            },
            {
                "hour": 14,
                "minutes": 10,
                "seconds": 0
            },
            {
                "hour": 16,
                "minutes": 34,
                "seconds": 0
            },
            {
                "hour": 20,
                "minutes": 34,
                "seconds": 0
            },
            {
                "hour": 21,
                "minutes": 36,
                "seconds": 0
            }
        ],
        "latencies": [
            69.16133539075963,
            70.7981100352481,
            51.76174461306073,
            19.290890792384744,
            -0.459688498172909,
            88.84894028492272,
            35.104598234640434,
            28.98352508386597
        ]
    },
    {
        "id": 5,
        "name": "105",
        "stops": [
            {
                "id": 50,
                "name": "Centrum Nadawcze RTV"
            },
            {
                "id": 46,
                "name": "Bysewska"
            },
            {
                "id": 79,
                "name": "CzyĹźewskiego"
            },
            {
                "id": 48,
                "name": "Centrostal"
            },
            {
                "id": 45,
                "name": "Bysewo"
            },
            {
                "id": 36,
                "name": "Brama ĹťuĹawska"
            },
            {
                "id": 7,
                "name": "Archikatedra Oliwska"
            },
            {
                "id": 62,
                "name": "Chrzanowskiego"
            },
            {
                "id": 76,
                "name": "Czarny DwĂłr"
            },
            {
                "id": 24,
                "name": "Benzynowa"
            },
            {
                "id": 16,
                "name": "Barniewicka"
            },
            {
                "id": 33,
                "name": "Bora Komorowskiego"
            },
            {
                "id": 47,
                "name": "Cebertowicza"
            },
            {
                "id": 43,
                "name": "Budzysza"
            },
            {
                "id": 69,
                "name": "CieszyĹskiego"
            },
            {
                "id": 74,
                "name": "CygaĹska GĂłra"
            },
            {
                "id": 10,
                "name": "Bajana"
            },
            {
                "id": 18,
                "name": "Baza Manipulacyjna"
            },
            {
                "id": 71,
                "name": "Cmentarna"
            }
        ],
        "dTimes": [
            0,
            1455,
            375,
            1635,
            4020,
            915,
            1230,
            2040,
            1995,
            1050,
            780,
            600,
            2670,
            2580,
            330,
            735,
            3255,
            510,
            1365
        ],
        "departures": [
            {
                "hour": 0,
                "minutes": 49,
                "seconds": 0
            },
            {
                "hour": 14,
                "minutes": 30,
                "seconds": 0
            },
            {
                "hour": 18,
                "minutes": 5,
                "seconds": 0
            },
            {
                "hour": 23,
                "minutes": 35,
                "seconds": 0
            }
        ],
        "latencies": [
            88.3241622610949,
            99.5955066808965,
            17.758563018636778,
            90.69653027807362
        ]
    },
    {
        "id": 6,
        "name": "106",
        "stops": [
            {
                "id": 40,
                "name": "Buczka"
            },
            {
                "id": 68,
                "name": "Ciasna"
            },
            {
                "id": 34,
                "name": "Brama Oliwska"
            },
            {
                "id": 70,
                "name": "CioĹkowskiego"
            },
            {
                "id": 20,
                "name": "BCB Azymutalna"
            },
            {
                "id": 72,
                "name": "Cmentarz Ĺostowicki"
            },
            {
                "id": 50,
                "name": "Centrum Nadawcze RTV"
            },
            {
                "id": 44,
                "name": "Bursztynowa"
            },
            {
                "id": 60,
                "name": "Chmielna"
            },
            {
                "id": 38,
                "name": "BrÄtowo PKM"
            },
            {
                "id": 46,
                "name": "Bysewska"
            },
            {
                "id": 77,
                "name": "CzermiĹskiego"
            },
            {
                "id": 1,
                "name": "Agrarna"
            },
            {
                "id": 54,
                "name": "CheĹm - WiÄckowskiego"
            },
            {
                "id": 24,
                "name": "Benzynowa"
            },
            {
                "id": 28,
                "name": "Bobrowa"
            },
            {
                "id": 58,
                "name": "ChĹopska"
            },
            {
                "id": 13,
                "name": "Banino - Borowiecka"
            },
            {
                "id": 43,
                "name": "Budzysza"
            },
            {
                "id": 19,
                "name": "BaĹźyĹskiego"
            },
            {
                "id": 61,
                "name": "Chodowieckiego"
            },
            {
                "id": 63,
                "name": "Chwaszczyno"
            },
            {
                "id": 78,
                "name": "Czerwony DwĂłr"
            },
            {
                "id": 39,
                "name": "BrzeĹşno"
            },
            {
                "id": 41,
                "name": "BudapesztaĹska"
            },
            {
                "id": 22,
                "name": "Bema"
            }
        ],
        "dTimes": [
            0,
            375,
            330,
            555,
            3165,
            510,
            1095,
            195,
            1680,
            2715,
            240,
            2715,
            420,
            600,
            2265,
            2265,
            510,
            3120,
            105,
            240,
            465,
            735,
            2310,
            510,
            1230,
            825
        ],
        "departures": [
            {
                "hour": 3,
                "minutes": 53,
                "seconds": 0
            },
            {
                "hour": 4,
                "minutes": 53,
                "seconds": 0
            },
            {
                "hour": 5,
                "minutes": 55,
                "seconds": 0
            },
            {
                "hour": 13,
                "minutes": 43,
                "seconds": 0
            },
            {
                "hour": 18,
                "minutes": 17,
                "seconds": 0
            }
        ],
        "latencies": [
            27.257039717398584,
            34.45604209904559,
            40.763161750975996,
            69.36523412843235,
            59.84886597911827
        ]
    },
    {
        "id": 7,"name": "107",
        "stops": [
            {"id": 40, "name": "Buczka"},
            {"id": 34, "name": "Brama Oliwska"},
            {"id": 70, "name": "CioĹkowskiego"},
            {"id": 20, "name": "BCB Azymutalna"},
            {"id": 44, "name": "Bursztynowa"},
            {"id": 14, "name": "Banino - Pszenna"},
            {"id": 73, "name": "Cmentarz Oliwski"},
            {"id": 7, "name": "Archikatedra Oliwska"},
            {"id": 57, "name": "ChĹodna"},
            {"id": 27, "name": "BĹonia"},
            {"id": 16, "name": "Barniewicka"},
            {"id": 33, "name": "Bora Komorowskiego"},
            {"id": 15, "name": "Banino - SzkoĹa"},
            {"id": 65, "name": "Chwaszczyno Oliwska"},
            {"id": 9, "name": "AstronautĂłw"},
            {"id": 32, "name": "Boguckiego"},
            {"id": 66, "name": "Chwaszczyno Szmaragdowa"},
            {"id": 4, "name": "al. Hallera"},
            {"id": 43, "name": "Budzysza"},
            {"id": 19, "name": "BaĹźyĹskiego"},
            {"id": 49, "name": "Centrum Medycyny Inwazyjnej"},
            {"id": 78, "name": "Czerwony DwĂłr"},
            {"id": 3, "name": "Aksamitna"},
            {"id": 41, "name": "BudapesztaĹska"},
            {"id": 22, "name": "Bema"},
            {"id": 12, "name": "Banino"}],
        "dTimes": [0, 150, 555, 3165, 1770, 555, 1095, 915, 690, 1590, 2580, 600, 960, 375, 465, 555, 2085, 1320, 3704, 240, 825, 2670, 375, 1275, 825, 1635],
        "departures": [
            {"hour": 2, "minutes": 24, "seconds": 0},
            {"hour": 4, "minutes": 20, "seconds": 0},
            {"hour": 5, "minutes": 44, "seconds": 0},
            {"hour": 6,"minutes": 14,"seconds": 0},
            {"hour": 6, "minutes": 50, "seconds": 0},
            {"hour": 11, "minutes": 5, "seconds": 0},
            {"hour": 13, "minutes": 37, "seconds": 0}],
        "latencies": [5.366469624219462, 34.50718089938164, 37.1092507482972, 58.442813565256074, 47.925141231389716, 36.47320776828565, 27.131624147994444]
    },
    {"id": 8, "name": "108",
        "stops": [
            {"id": 50, "name": "Centrum Nadawcze RTV"},
            {"id": 73, "name": "Cmentarz Oliwski"},
            {"id": 48, "name": "Centrostal"},
            {"id": 45, "name": "Bysewo"},
            {"id": 53, "name": "Charpentiera WisĹoujĹcie"},
            {"id": 62, "name": "Chrzanowskiego"},
            {"id": 76, "name": "Czarny DwĂłr"},
            {"id": 15, "name": "Banino - SzkoĹa"},
            {"id": 29, "name": "Bogatka"},
            {"id": 15, "name": "Banino - SzkoĹa"},
            {"id": 33, "name": "Bora Komorowskiego"},
            {"id": 9, "name": "AstronautĂłw"},
            {"id": 55, "name": "CheĹm Cienista"},
            {"id": 4, "name": "al. Hallera"},
            {"id": 25, "name": "Biblioteka GĹĂłwna UG"},
            {"id": 19, "name": "BaĹźyĹskiego"},
            {"id": 61, "name": "Chodowieckiego"},
            {"id": 63, "name": "Chwaszczyno"},
            {"id": 78, "name": "Czerwony DwĂłr"},
            {"id": 3, "name": "Aksamitna"},
            {"id": 78, "name": "Czerwony DwĂłr"},
            {"id": 23, "name": "Beniowskiego"},
            {"id": 18, "name": "Baza Manipulacyjna"}],
        "dTimes": [0, 825, 2715, 4020, 4245, 1095, 1995, 465, 60, 60, 960, 420, 1320, 1635, 3660, 285, 465, 735, 2310, 375, 375, 735, 825],
        "departures": [
            {"hour":  3   , "minutes": 39, "seconds": 0},
            {"hour": 12, "minutes": 22, "seconds": 0},
            {"hour": 16, "minutes": 51, "seconds": 0}],
        "latencies": [46.92847269074991, 95.18130847346038, 30.893575540045276]},

    {   "id": 9, "name": "109",
        "stops": [
            {"id": 30, "name": "Bogatka I"},
            {"id": 38, "name": "BrÄtowo PKM"},
            {"id": 16, "name": "Barniewicka"},
            {"id": 33, "name": "Bora Komorowskiego"},
            {"id": 26, "name": "Biwakowa"},
            {"id": 65, "name": "Chwaszczyno Oliwska"},
            {"id": 26, "name": "Biwakowa"},
            {"id": 42, "name": "Budowlanych"},
            {"id": 9, "name": "AstronautĂłw"},
            {"id": 58, "name": "ChĹopska"},
            {"id": 47, "name": "Cebertowicza"},
            {"id": 43, "name": "Budzysza"},
            {"id": 56, "name": "CheĹm Witosa"},
            {"id": 61, "name": "Chodowieckiego"},
            {"id": 74, "name": "CygaĹska GĂłra"},
            {"id": 10, "name": "Bajana"},
            {"id": 75, "name": "CystersĂłw"},
            {"id": 23, "name": "Beniowskiego"},
            {"id": 22, "name": "Bema"},
            {"id": 12, "name": "Banino"}],
        "dTimes": [0, 1635, 1995, 600, 285, 420, 420, 825, 960, 1635, 645, 2580, 645, 690, 105, 3255, 1500, 915, 1005, 1635],
        "departures": [
            {"hour": 0, "minutes": 7, "seconds": 0},
            {"hour": 10, "minutes": 29, "seconds": 0},
            {"hour": 20, "minutes": 52, "seconds": 0},
            {"hour": 23, "minutes": 59, "seconds": 0}],
        "latencies": [14.909054337767884, 4.131228701444343, 69.08868980617262, 75.84812570386566]
    }
]