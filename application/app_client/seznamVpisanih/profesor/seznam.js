(function() {
  /* global angular */
  
  seznamPro.$inject = ['$window','$location','estudentPodatki'];
  function seznamPro($window, $location,estudentPodatki) {
    
    var vm = this;
    

    estudentPodatki.studijskoLeto().then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.d = { leto: odgovor.data };
     console.log(vm.d.leto)
    }, 
    function error(odgovor) {
      vm.sporocilo = "There was an error!";
      console.log(odgovor.e);
    });

  estudentPodatki.predmetiProfesorja($window.localStorage['upIme'].split("@")[0]).then(
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
    .controller('seznamPro', seznamPro);
})();