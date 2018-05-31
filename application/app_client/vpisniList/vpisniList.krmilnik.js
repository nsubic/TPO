(function() {
  /* global angular */
  /* global $ */
  vpisniListCtrl.$inject = ['$location', '$scope', 'estudentPodatki', '$routeParams', '$window'];
  function vpisniListCtrl($location, $scope, estudentPodatki, $routeParams, $window) {
    var vm = this;
    $scope.zetonNiNaVoljo = true;
    $scope.maxPredmeti = 10;
    $scope.obvezniPredmeti = 0;
    $scope.izbraniPredmeti = 0;
    $scope.strokovni = 0;
    $scope.moduli = 0;
    
    $scope.maxTock = 60;
    $scope.tock = 0;
    
    var stran = $routeParams.stran;
    
    $scope.recalculate = function() {
      
      var intermediate = 0;
      var intermediateObvezni = 0;
      var intermediateIzbirni = 0;
      var strokovni = 0;
      var moduli = 0;
      
      $.each($scope.skupine, function(idx1, elem1) {
        $.each(elem1.predmeti, function(idx2, elem2) {
          if(elem1.id === 1) {
            intermediate += elem2.tocke;
            intermediateObvezni += 1;
          } else if(elem2.izbran) {
            intermediate += elem2.tocke;
            intermediateIzbirni += 1;
            if(elem1.id === 2) {
              strokovni += 1;
            }
            
            if(elem1.id === 4) {
              moduli += 1;
            }
          }
        });
      });
      
      $scope.tock = $scope.maxTock - intermediate;
      $scope.obvezniPredmeti = intermediateObvezni;
      $scope.izbraniPredmeti = intermediateIzbirni;
      $scope.strokovni = strokovni;
      $scope.moduli = moduli;
    }
    
    $scope.reloadPredmeti = function() {
      console.log("letnik", $scope.vpis.letnik);
      if($scope.vpis.letnik == 2) {
        $scope.maxTock = 54;
      } else {
        $scope.maxTock = 60;
      }
      
      console.log("maxTock", $scope.maxTock);
      
      $scope.tock = 0;
      $scope.obvezniPredmeti = 0;
      $scope.izbraniPredmeti = 0;
      $scope.zetoni = [];
      $scope.skupine = [];
      $scope.skupine_izbira = [];
      $scope.izbira = [];
    
      var partial = $.grep($scope.predmeti, function(data) {
        var result = true;
        if(data.sifra_stProgramFK !== $scope.vpis.program) {
          result = false;
        }
        
        if(data.letnikFK !== $scope.vpis.letnik) {
          result = false;
        }
        return result;
      });
      
      $scope.skupine = [];
      $.each(partial, function(idx, elem) {
        var found = $.grep($scope.skupine, function(data) {
          return data.id == elem.sifra_predmetnikaFK;
        });
        
        if(found.length === 0) {
          $scope.skupine.push({
            id: elem.sifra_predmetnikaFK,
            naziv: elem.Naziv_Skupine,
            predmeti: [{
              id: elem.sifra_predmetaFK,
              skupina: elem.sifra_predmetnikaFK,
              naziv: elem.ime_predmeta,
              tocke: elem.KT_tocke,
              izbran: false,
            }],
          });
        } else {
          var currentElement = found[0];
          
          var seeker = $.grep(currentElement.predmeti, function(distinct) {
            return distinct.id == elem.sifra_predmetaFK;
          });
          
          if(seeker.length === 0) {
            found[0].predmeti.push({
              id: elem.sifra_predmetaFK,
              skupina: found[0].id,
              naziv: elem.ime_predmeta,
              tocke: elem.KT_tocke,
              izbran: false,
            });  
          }
        }
      });
          
      $scope.recalculate();
      console.log("partial", $scope.skupine);
    }
    
    //brainstorming:
      //mjbi na zacetku se vprasa studenta kasne vrste vpisa zeli, da mu na podlagi tega dam predmete ki jih lahko izbere, ter predmete ki so avtomatskop dodeljeni,
      // predlagane module, izbirce...
    $scope.vpis = {
      ime: null,
      priimek: null,
      datum_rojstva: null,
      kraj_rojstva: null,
      drzava_rojstva: "SI",
      emso: null,
      davcna: null,
      spol: null,
      tel_st: null,
      stalni_naslov_ulica: null,
      stalni_naslov_hisnast: null,
      stalni_postna_stevilka: null,
      stalni_obcina_koda: null,
      stalni_drzava_koda: null,
      zacasni_naslov_ulica: null,
      zacasni_naslov_hisnast: null,
      zacasni_postna_stevilka: null,
      zacasni_kraj_posta: null,
      zacasni_drzava_posta: null,
      program: null,
      vrsta_vpisa: null,
      letnik: null,
      solskoLeto: "2018/2019",
    };
    
    $scope.skupine = [];
    $scope.izbira = [];
    
    // Šifranti
    $scope.poste = [];
    $scope.drzave = [];
    $scope.programi = [];
    $scope.vrste_vpisov = [];
    $scope.letniki = [];
    $scope.predmeti = [];
    
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
      .naciniStudija()
      .then(function(res) {
        $scope.nacini_studija = res.data.response;
        console.log("načini študija", $scope.nacini_studija);
      })
      
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
      });
      
      estudentPodatki
        .nosilciInPredmeti()
        .then(function(res) {
          $scope.predmeti = res.data.response;
          console.log("predmeti", $scope.predmeti);
          $scope.reloadPredmeti();
        });
  
    $scope.$watch('vpis.program', $scope.reloadPredmeti);
    $scope.$watch('vpis.letnik', $scope.reloadPredmeti);
    $scope.$watch('vpis.stalni_postna_stevilka', function(data) { 
      if($scope.vpis.stalni_drzava_koda && $scope.vpis.stalni_drzava_koda.dvomestna_koda == "SI") {
        var results = $.grep($scope.poste, function(value, index) {
          return value.posta.toString() === data;
        })
        if(results && results.length > 0) {
          $scope.vpis.stalni_obcina_koda = results[0].kraj;  
        }  
      }
    }, true);
    
    $scope.$watch('vpis.zacasni_postna_stevilka', function(data) {
      
      // Samo za slovenske pošte
      if($scope.vpis.zacasni_drzava_posta && $scope.vpis.zacasni_drzava_posta.dvomestna_koda == "SI") {
        var results = $.grep($scope.poste, function(value, index) {
          return value.posta.toString() === data;
        })
        
        if(results && results.length > 0) {
          $scope.vpis.zacasni_kraj_posta = results[0].kraj;  
        }  
      }
      
    }, true);
    
    $scope.dodajPredmet = function(predmet) {
      
      var tempSum = $scope.tock - predmet.tocke;
      if(tempSum < 0) {
        console.log("tempSum", tempSum, $scope.tock, predmet.tocke);
        alert("Presegli ste omejitev točk");
        return;
      }
      
      var tempPieces = $scope.obvezniPredmeti + $scope.izbraniPredmeti;
      if(tempPieces >= $scope.maxPredmeti) {
        alert("Dosegli ste maksimalno dovoljeno število predmetov " + $scope.maxPredmeti);
        return;
      }
      
      if($scope.strokovni >= 1 && predmet.skupina == 2) {
        alert("Strokovni predmet ste že izbrali");
        return;
      }
      
      if($scope.moduli >= 2 && predmet.skupina == 4) {
        alert("Presegli ste maksimalno število modulov; max: 2");
        return;
      }
      
      predmet.izbran = true;
      $scope.recalculate();
    }
    
    $scope.odstraniPredmet = function(predmet) {
      predmet.izbran = false;
      $scope.recalculate();
    }
    
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
    
    estudentPodatki.student2($window.localStorage['upIme']).then(function (res) {
      console.log(res);
      var vpisna = res.data.response[0].vpisna_st;
      estudentPodatki
        .dobiZeton(vpisna)
        .then(function(res) {
          console.log("zetoni", res);
          var data = res.data.response;
          $scope.zetoni = data;
          
          if(data.length > 0) {
            $scope.zetonNiNaVoljo = false;
            var first = data[0];
            console.log("first", first);
            $scope.vpis.program = first.Nivo_studijaFK;
            $scope.vpis.vrsta_vpisa = first.nacin_studijaFK;
            $scope.vpis.letnik = first.letnikFK;
            $scope.vpis.solskoLeto = first.studijsko_letoFK;
            
            $scope.reloadPredmeti();
          }
        });
    });
  }
  
  angular
    .module('estudent')
    .controller('vpisniListCtrl', vpisniListCtrl);
})();