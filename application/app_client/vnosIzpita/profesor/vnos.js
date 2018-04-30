(function() {
  /* global angular */
  
  vnosIzpitaPro.$inject = ['$location','estudentPodatki'];
  function vnosIzpitaPro($location,estudentPodatki) {
    
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

    
    
    vm.izpis = function(id,conceptName,ime) {
      id = parseInt(id)
      estudentPodatki.vpisaniPredmet(conceptName,id).then(
        function success(odgovor) {
          vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih studentov.";
          vm.ime=ime;
          vm.pod = { vpisani: odgovor.data };
        console.log(vm.pod.vpisani);
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