(function() {
  /* global angular */
  /* global $ */
  vpisniListCtrl.$inject = ['$location', '$scope', 'estudentPodatki'];
  function vpisniListCtrl($location, $scope, estudentPodatki) {
    var vm = this;
    
    //brainstorming:
      //mjbi na zacetku se vprasa studenta kasne vrste vpisa zeli, da mu na podlagi tega dam predmete ki jih lahko izbere, ter predmete ki so avtomatskop dodeljeni,
      // predlagane module, izbirce...
    $scope.vpis = {
      ime: "",
      priimek: "",
      datum_rojstva: "",
      kraj_rojstva: "",
      drzava_rojstva: "SI",
      emso: "",
      davcna: "",
      spol: "",
      tel_st: "",
      stalni_naslov_ulica: "",
      stalni_naslov_hisnast: "",
      stalni_postna_stevilka: "",
      stalni_obcina_koda: "",
      stalni_drzava_koda: "",
      zacasni_naslov_ulica: "",
      zacasni_naslov_hisnast: "",
      zacasni_postna_stevilka: "",
      zacasni_kraj_posta: "",
      zacasni_drzava_posta: "",
      program: "",
      vrsta_vpisa: "",
      letnik: "",
    };
    
    // Šifranti
    $scope.poste = [];
    $scope.drzave = [];
    $scope.programi = [];
    $scope.vrste_vpisov = [];
    $scope.letniki = [];
    
    estudentPodatki
      .drzava() 
      .then(function(res) {
        $scope.drzave = res.data.response;
        console.log("drzave", res);
      });
      
    estudentPodatki
      .studijskiProgram()
      .then(function(res) {
        $scope.programi = res.data.response;
        console.log("programi", $scope.programi);
      });
      
    estudentPodatki
      .vrsteVpisa()
      .then(function(res) {
        $scope.vrste_vpisov = res.data.response;
        console.log("vrste vpisov", $scope.vrste_vpisov);
      });
      
    estudentPodatki
      .posta()
      .then(function(res) {
        $scope.poste = $.map(res.data.response, function(value, index) {
          return {
            "posta": value.postna_stevilka,
            "kraj": value.ime_poste,
          }
        });
      });
      
    estudentPodatki
      .letnik()
      .then(function(res) {
        $scope.letniki = res.data.response;
        console.log("letniki", $scope.letniki);
      })
      
    $scope.$watch('vpis.stalni_postna_stevilka', function(data) { 
      
      var results = $.grep($scope.poste, function(value, index) {
        return value.posta.toString() === data;
      })
      
      if(results && results.length > 0) {
        $scope.vpis.stalni_obcina_koda = results[0].kraj;  
      }
      
    }, true);
    
    $scope.$watch('vpis.zacasni_postna_stevilka', function(data) {
      
      var results = $.grep($scope.poste, function(value, index) {
        return value.posta.toString() === data;
      })
      
      if(results && results.length > 0) {
        $scope.vpis.zacasni_kraj_posta = results[0].kraj;  
      }
    }, true);
    
    
    vm.izvediVpis = function() {
      console.info("submit start");
      
      if (true) // ce se bo student prvic vpisal na faks
      {
        // potrebujemo novo vpisno stevilko
        // preverimo ce so pogoji vpisa oz. wateva je ze treba
      }
      else
      {
        // ce ga ze imamo v bazi, potem pa moramo preverjatni kombinacije, kam se voce vpisat
      }
      
      // estudentPodatki
      //  .dodajStudenta(vpis) ???
      // sn: ali kaj drugega, ne vem
    }
    
    
  }
  
  angular
    .module('estudent')
    .controller('vpisniListCtrl', vpisniListCtrl);
})();