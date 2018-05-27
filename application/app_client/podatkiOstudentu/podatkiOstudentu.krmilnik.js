(function() {
  /* global angular */
  
  podatkiOstudentu.$inject = ['$scope', '$location','estudentPodatki'];
  function podatkiOstudentu($scope, $location, estudentPodatki) {
    var vm = this;
    
    $scope.vrsteVpisov = [];
    $scope.zeton = {
      vrsta_vpisa: null,
      vpisna_stFK: null,
      izkoriscen: null,
      visoko_povprecje: null,
    }
    
    estudentPodatki
      .vrsteVpisa()
      .then(function(res) {
        $scope.vrsteVpisov = res.data.response;
        console.log("vrste vpisov", $scope.vrsteVpisov);
      });
      

    
    estudentPodatki.studenti().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.data = { studenti: odgovor.data };
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
    });
    
    vm.izpis = function(vpisna,ime,priimek) {
      vm.ime=ime;
      vm.priimek=priimek;
      vm.vpisna=vpisna
      
      estudentPodatki
        .dobiZeton(vpisna)
        .then(function(res) {
          console.log("zetoni", res);
          var data = res.data.response;
          if(data.length > 0) {
            $scope.zetoni = data;
            var datum = data[0];
            console.info("zeton", datum);
            $scope.zeton.vpisna_stFK = datum.vpisna_stFK;
            $scope.selVrstaVpisa = $scope.zeton.vrsta_vpisa = datum.vrsta_vpisa;
            $scope.zeton.izkoriscen = datum.izkoriscen === 1 ? true : false;
            $scope.zeton.visoko_povprecje = datum.visoko_povprecje;
          }
        })
      
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