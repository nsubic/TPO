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
     .when('/izberiPredmete', {
       templateUrl: '/izberiPredmete/izberiPredmete.html',
       controller: 'izberiPredmete',
       controllerAs: 'vm'
     })
     .when('/vnosIzpitaRef', {
       templateUrl: '/vnosIzpita/referentka/vnos.html',
       controller: 'vnosIzpitaRef',
       controllerAs: 'vm'
     })
     .when('/vnosIzpitaPro', {
       templateUrl: '/vnosIzpita/profesor/vnos.html',
       controller: 'vnosIzpitaPro',
       controllerAs: 'vm'
     })
     .when('/prijavaIzpit', {
       templateUrl: '/prijavaIzpit/prijavaIzpit.pogled.html',
       controller: 'prijavaIzpit',
       controllerAs: 'vm'
     })
     .when('/kartotecniListPro/:vpisna', {
       templateUrl: '/kartotecniList/profesor/listPro.html',
       controller: 'kartotecniListPro',
       controllerAs: 'vm'
     })
     .when('/kartotecniListRef/:vpisna', {
       templateUrl: '/kartotecniList/referentka/listRef.html',
       controller: 'kartotecniListRef',
       controllerAs: 'vm'
     })
     .when('/kartotecniListStud/:vpisna', {
       templateUrl: '/kartotecniList/student/listStudent.html',
       controller: 'kartotecniListStud',
       controllerAs: 'vm'
     })
     .otherwise({redirectTo: '/prijava'});
     
     $locationProvider.html5Mode(true);
 }
 
  
 angular
   .module('estudent')
   .config(['$routeProvider', '$locationProvider', nastavitev]);
})();