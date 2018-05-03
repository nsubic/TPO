(function() {
  /* global angular */
  
  vnosIzpitaPro.$inject = ['$location','estudentPodatki', '$scope'];
  function vnosIzpitaPro($location,estudentPodatki, $scope) {
    var vm = this;
    
 
  
  estudentPodatki.predmetiProfesorja(1).then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.data = { predmeti: odgovor.data };
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
    });

    
    
    vm.izpis = function(id,ime) {
      id = parseInt(id)
      estudentPodatki.izpiti(id).then(
        function success(odgovor) {
          vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih studentov.";
          vm.ime=ime;
          vm.pod = { izpiti: odgovor.data };
        console.log(vm.pod.izpiti);
        }, 
        function error(odgovor) {
          vm.sporocilo = "There was an error!";
          console.log(odgovor.e);
      });
    };
    
  }
  
  angular
    .module('estudent')
    .controller('vnosIzpitaPro', vnosIzpitaPro);
})();

