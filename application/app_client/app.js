(function(){
 /* global angular */
 angular.module('estudent', ['ngRoute','ngSanitize']);
 function nastavitev($routeProvider, $locationProvider) {
   $routeProvider
    .when('/prijava', {
       templateUrl: '/prijava/prijava.pogled.html',
       controller: 'prijavaCtrl',
       controllerAs: 'vm'
    })
    .when('/seznamRef', {
       templateUrl: '/seznamVpisanih/referentka/seznam.html',
       controller: 'seznamRef',
       controllerAs: 'vm'
    })
    .when('/seznamPro', {
       templateUrl: '/seznamVpisanih/profesor/seznam.html',
       controller: 'seznamPro',
       controllerAs: 'vm'
    })
    .when('/podatkiStudentRef', {
       templateUrl: '/podatkiOstudentu/podatkiOstudentuRef.pogled.html',
       controller: 'podatkiOstudentu',
       controllerAs: 'vm'
    })
    .when('/podatkiStudentPro', {
       templateUrl: '/podatkiOstudentu/podatkiOstudentuPro.pogled.html',
       controller: 'podatkiOstudentu',
       controllerAs: 'vm'
    })
    .when('/podatkiStudent', {
       templateUrl: '/podatkiStudent/podatki.pogled.html',
       controller: 'podatkiStudent',
       controllerAs: 'vm'
    })
    .when('/vpisniList', {
       templateUrl: '/vpisniList/vpisniList.pogled.html',
       controller: 'vpisniListCtrl',
       controllerAs: 'vm'
    })
    .when('/uvozPodatkov', {
       templateUrl: '/uvozPodatkovKandidati/uvozPodatkovKandidati.pogled.html',
       controller: 'nalozi',
       controllerAs: 'vm'
     })
     .when('/steviloVpisanih', {
       templateUrl: '/steviloVpisanih/seznam.html',
       controller: 'steviloVpisanih',
       controllerAs: 'vm'
     })
     .when('/spremeniGeslo', {
       templateUrl: '/spremembaGesla/spremembaGesla.pogled.html',
       controller: 'spremembaGeslaCtrl',
       controllerAs: 'vm'
     })
     .otherwise({redirectTo: '/prijava'});
     
     $locationProvider.html5Mode(true);
 }
 
  
 angular
   .module('estudent')
   .config(['$routeProvider', '$locationProvider', nastavitev]);
})();