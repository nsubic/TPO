(function() {
  /* global angular */
  
  podatkiOstudentu.$inject = ['$location','estudentPodatki'];
  function podatkiOstudentu($location,estudentPodatki) {
    
    var vm = this;
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
      estudentPodatki.studentiVpis(vpisna).then(
        function success(odgovor) {
          vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih studentov.";
          vm.pod = { vpisani: odgovor.data };
        }, 
        function error(odgovor) {
          vm.sporocilo = "There was an error!";
          console.log(odgovor.e);
      });
    };
  }
  
  
  angular
    .module('estudent')
    .controller('podatkiOstudentu', podatkiOstudentu);
})();