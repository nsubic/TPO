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
    .when('/vpisniList', {
       templateUrl: '/vpisniList/vpisniList.pogled.html',
       controller: 'vpisniListCtrl',
       controllerAs: 'vm'
    })
    .when('/uvozPodatkov', {
       templateUrl: '/uvozPodatkovKandidati/uvozPodatkovKandidati.pogled.html'
    })
     .otherwise({redirectTo: '/prijava'});
     
     $locationProvider.html5Mode(true);
 }
 
  
 angular
   .module('estudent')
   .config(['$routeProvider', '$locationProvider', nastavitev]);
})();