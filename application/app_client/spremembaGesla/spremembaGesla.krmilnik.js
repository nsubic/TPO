(function() {
  /* global angular */
  
  spremembaGeslaCtrl.$inject = ['$window','$location', '$http', 'estudentPodatki'];
  function spremembaGeslaCtrl($window, $location, $http, estudentPodatki) {
    
    var vm = this;
    vm.prijavniPodatki = {
      elektronskiNaslov: "",
      geslo: ""
    };
    console.log("aaa")
    vm.prvotnaStran = $location.host() || '/';
    
    console.log("prvotnaStran: ", vm.prvotnaStran);
    vm.posiljanjePodatkov = function() {
      vm.napakaNaObrazcu = "";
      console.log(vm.prijavniPodatki.email)
      if (!vm.prijavniPodatki.email || !vm.prijavniPodatki.geslo1 || !vm.prijavniPodatki.geslo2) {
        vm.napakaNaObrazcu = "Zahtevani so vsi podatki, prosim poskusite znova!";
        return false;
      } else {
        vm.spremeniGeslo();
      }
    };
    vm.izvediPrijavo = function() {
      vm.spremeniGeslo = "";
      
      
      
    };
}
    angular
    .module('estudent')
    .controller('spremembaGeslaCtrl', spremembaGeslaCtrl());
})();