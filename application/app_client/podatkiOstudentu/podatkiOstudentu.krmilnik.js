(function() {
  /* global angular */
  
  podatkiOstudentu.$inject = ['$scope', '$location','estudentPodatki'];
  function podatkiOstudentu($scope, $location, estudentPodatki) {
    var vm = this;
    
    $scope.vrsteVpisov = [];
    $scope.naciniStudija = [];
    $scope.nivojiStudija = [];
    
    $scope.zeton = {
      vrsta_vpisa: null,
      nacin_studija: null,
      nivo_studija: null,
      vpisna_stFK: null,
      izkoriscen: null,
    }
    
    estudentPodatki
      .vrsteVpisa()
      .then(function(res) {
        $scope.vrsteVpisov = res.data.response;
        console.log("vrste vpisov", $scope.vrsteVpisov);
      });
      
    estudentPodatki
      .naciniStudija()
      .then(function(res) {
        $scope.naciniStudija = res.data.response;
        console.log("nacini studija", $scope.naciniStudija);
      });
      
    estudentPodatki
      .nivojiStudija()
      .then(function(res) {
        $scope.nivojiStudija = res.data.response;
        console.log("nivoji studija", $scope.nivojiStudija);
      })
      
      

    
    estudentPodatki.studenti().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.data = { studenti: odgovor.data };
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
    });
    
    $scope.zbrisiZeton = function(id) {
      console.log("brisanje zeton-a", id);
      estudentPodatki
        .izbrisiZeton(id)
        .then(function(res) {
          console.log("zbrisan", res);
          if(vm.izpisiZeton) {
            vm.izpisiZeton(); // refresh
          }
        })
      
    }
    
    $scope.vstaviZeton = function(zeton) {
      console.log("vstavljanje žeton-a", zeton);
      estudentPodatki
        .vstaviZeton($scope.zeton)
        .then(function(res) {
          console.log("vstavljen", res);
          if(vm.izpisiZeton) {
            vm.izpisiZeton(); // Refresh
          }
        })
    }
    
    vm.izpis = function(vpisna,ime,priimek) {
      vm.ime=ime;
      vm.priimek=priimek;
      vm.vpisna=vpisna
      $scope.zeton.vpisna_stFK = vpisna;
      vm.izpisiZeton = function() {
        estudentPodatki
        .dobiZeton(vpisna)
        .then(function(res) {
          console.log("zetoni", res);
          var data = res.data.response;
          $scope.zetoni = data;
        });
      }
      vm.izpisiZeton();
      
      estudentPodatki.studentiVpis(vpisna).then(
        function success(odgovor) {
          vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih studentov.";
          vm.pod = { vpisani: odgovor.data };
        }, 
        function error(odgovor) {
          vm.sporocilo = "There was an error!";
          console.log(odgovor.e);
      });
      
      $scope.shraniZeton = function() {
        console.log("shraniZeton");
        var data = $scope.zeton;
        data.izkoriscen = data.izkoriscen === true ? 1 : 0;
        estudentPodatki
          .updateZeton(data)
          .then(function(res) {
            alert("Žeton je posodobljen");
          }, function(error) {
            vm.sporocilo = "There was an error!";
            console.log(error.e);
          })
      }
    };
  }
  
  
  angular
    .module('estudent')
    .controller('podatkiOstudentu', podatkiOstudentu);
})();