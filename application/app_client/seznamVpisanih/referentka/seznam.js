(function() {
  /* global angular */
  
  seznamRef.$inject = ['$location','estudentPodatki'];
  function seznamRef($location,estudentPodatki) {
    
    var vm = this;
    

  estudentPodatki.predmet().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.data = { predmeti: odgovor.data };
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
    });
    estudentPodatki.studijskoLeto().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.d = { leto: odgovor.data };
     console.log(vm.d.leto.response.studijsko_leto)
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
    });
    
    
    vm.izpis = function(id,ime) {
      var conceptName = $('#sel1').find(":selected").text();
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
    .controller('seznamRef', seznamRef);
})();