var app = angular.module("app", []);

app.controller('HomeCtrl', function ($scope) {
    console.log("Home Controller!");
    $scope.name = 'Agnieszko';
});

var busStop = [
    {
        id: 11,
        name: "Bajki",
        pos: {
            x: 0,
            y: 70
        }
    },
    {
        id: 40,
        name: "Buczka",
        pos: {
            x: 1,
            y: 16
        }
    },
    {
        id: 68,
        name: "Ciasna",
        pos: {
            x: 2,
            y: 23
        }
    },
    {
        id: 34,
        name: "Brama Oliwska",
        pos: {
            x: 3,
            y: 17
        }
    },
    {
        id: 52,
        name: "Chałubińskiego",
        pos: {
            x: 4,
            y: 11
        }
    },
    {
        id: 21,
        name: "Belgradzka",
        pos: {
            x: 4,
            y: 74
        }
    },
    {
        id: 70,
        name: "CioÅ‚kowskiego",
        pos: {
            x: 6,
            y: 8
        }
    },
    {
        id: 20,
        name: "BCB Azymutalna",
        pos: {
            x: 9,
            y: 75
        }
    },
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