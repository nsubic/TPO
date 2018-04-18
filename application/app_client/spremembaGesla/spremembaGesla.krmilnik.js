(function() {
  /* global angular */
  
  spremembaGeslaCtrl.$inject = ['$window', '$http', 'estudentPodatki'];
  function spremembaGeslaCtrl($window, $http, estudentPodatki) {
    
    var vm = this;
    vm.prijavniPodatki = {
      elektronskiNaslov: "",
      geslo1: "",
      geslo2: ""
    };
    console.log("aaa");
    
    vm.posiljanjePodatkov = function() {
      vm.napakaNaObrazcu = "";
      console.log(vm.prijavniPodatki.email)
      if (!vm.prijavniPodatki.email || !vm.prijavniPodatki.geslo1 || !vm.prijavniPodatki.geslo2) {
        vm.napakaNaObrazcu = "Zahtevani so vsi podatki, prosim poskusite znova!";
        return false;
      } else {
        if(vm.prijavniPodatki.geslo1 == vm.prijavniPodatki.geslo2){
          vm.spremeniGeslo();
        }
        else{
          vm.napakaNaObrazcu = "Gesli se ne ujemata!";
        }
      }
    };
    vm.spremeniGeslo = function() {
      vm.napakaNaObrazcu = "";
      vm.najdemoUporabnika = 0;
      var oseba = estudentPodatki.najdiUpIme(vm.prijavniPodatki.email).then(
            function success(odgovor) {
             
              if(odgovor.data.response[0] != undefined){
                estudentPodatki.spremeniGeslo({
                      upIme:vm.prijavniPodatki.email,
                      geslo:vm.prijavniPodatki.geslo1
                    }).then(
                function success(odgovor) {
                  console.log(vm.prijavniPodatki.email);                  
                  console.log(vm.prijavniPodatki.geslo1);
                  console.log("Uspelo");
                  window.location.replace("/");
                
                }, 
                function error(odgovor) {
                  vm.napakaNaObrazcu = "Ni dostopa do baze!";
                  console.log(odgovor.e);
              });
                 console.log(vm.prijavniPodatki.email, odgovor.data.response[0].upIme);
              }
              else{
                vm.napakaNaObrazcu = "Uporabniško ime ne obstaja!";
              }
            },
            function error(odgovor) {
              vm.napakaNaObrazcu = "Ni dostopa do baze!";
              console.log(odgovor.e);
        });
    };
  }
    angular
    .module('estudent')
    .controller('spremembaGeslaCtrl', spremembaGeslaCtrl);
})();