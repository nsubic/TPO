(function() {
  /* global angular */
  
  prijavaCtrl.$inject = ['$location', 'estudentPodatki'];
  function prijavaCtrl($location, estudentPodatki) {
    
    var vm = this;
    vm.prijavniPodatki = {
      elektronskiNaslov: "",
      geslo: ""
    };
    console.log("aaa")
    vm.prvotnaStran = $location.search().stran || '/';
    
    
    vm.posiljanjePodatkov = function() {
      vm.napakaNaObrazcu = "";
      console.log("aaa")
      console.log(vm.prijavniPodatki.email)
      if (!vm.prijavniPodatki.email || !vm.prijavniPodatki.password) {
        vm.napakaNaObrazcu = "Zahtevani so vsi podatki, prosim poskusite znova!";
        return false;
      } else {
        vm.izvediPrijavo();
      }
    };
    vm.izvediPrijavo = function() {
      vm.napakaNaObrazcu = "";
      console.log(estudentPodatki.dobiOsebe);
      
    };
  }
  
  angular
    .module('estudent')
    .controller('prijavaCtrl', prijavaCtrl);
})();