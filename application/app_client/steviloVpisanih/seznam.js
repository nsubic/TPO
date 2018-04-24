(function() {
  /* global angular */
  
  steviloVpisanih.$inject = ['$location','estudentPodatki'];
  function steviloVpisanih($location,estudentPodatki) {
    
    var vm = this;
    

  estudentPodatki.studijskoLeto().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.l = { leto: odgovor.data };
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
  });
  
  estudentPodatki.studijskiProgram().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.p = { program: odgovor.data };
      console.log(vm.p.program)
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
  });
  estudentPodatki.letnik().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.g = { letnik: odgovor.data };
      console.log(vm.g.letnik)
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
  });
  
  estudentPodatki.stVpisanih().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.z = { vpisani: odgovor.data };
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
  });

    
    

  }
  angular
    .module('estudent')
    .controller('steviloVpisanih', steviloVpisanih);
})();