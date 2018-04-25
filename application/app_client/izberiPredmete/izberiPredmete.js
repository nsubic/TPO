(function() {
  /* global angular */
  
  izberiPredmete.$inject = ['$window','$location','estudentPodatki'];
  function izberiPredmete($window, $location,estudentPodatki) {
    console.log($window.localStorage['upIme']);
    var vm = this;
    var upime = $window.localStorage['upIme']
    
   estudentPodatki.student2(upime).then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.d = { pod: odgovor.data };
      console.log(vm.d.pod.response[0])
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
    });
    
    vm.izpis = function() {

    };
  }
  
  angular
    .module('estudent')
    .controller('izberiPredmete', izberiPredmete);
})();