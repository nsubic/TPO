(function() {
  /* global angular */
  
  prijavaIzpit.$inject = ['$window', '$location','estudentPodatki', '$scope'];
  function prijavaIzpit($window,$location,estudentPodatki, $scope) {
    var vm = this;
    
    console.log($window.localStorage['upIme'])
    
    vm.podatki = {
      predmet: "",
      datum:"",
      lokacija:""
    };
 

    vm.izbrisi = function(sifra) {
       console.log(sifra)
        estudentPodatki.izbrisiIzpit(sifra).then(
        function success(res) {
          alert("Uspešno izbrisan izpit!")
            location.reload();
        }, 
        function error(res) {
          vm.izbris2 = "Napaka pri brisanju izpita."
        });
    };

    vm.prikaziNapako = function(napaka) {
      $scope.$apply(function() {
        vm.sporocilo = napaka.message;
      });
    };
    
    vm.preveri = function(sifra) {
      for(var i=0; i<vm.sifraPredmetov.length; i++){
        if(sifra == vm.sifraPredmetov[i])
         return true
      }
      return false
    };
      


  }
  
  angular
    .module('estudent')
    .controller('prijavaIzpit', prijavaIzpit);
})();
