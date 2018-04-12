(function() {
  /* global angular */
  
  prijavaCtrl.$inject = ['$location', '$http', 'estudentPodatki'];
  function prijavaCtrl($location, $http, estudentPodatki) {
    
    var vm = this;
    vm.prijavniPodatki = {
      elektronskiNaslov: "",
      geslo: ""
    };
    console.log("aaa")
    vm.prvotnaStran = $location.search().stran || '/';
    
    
    vm.posiljanjePodatkov = function() {
      vm.napakaNaObrazcu = "";
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
      var oseba = estudentPodatki.najdiUpIme(vm.prijavniPodatki.email);
      oseba = $http.get('/api/dobiOsebe/' + vm.prijavniPodatki.email);
      console.log(oseba)
    };
  }
  
  angular
    .module('estudent')
    .controller('prijavaCtrl', prijavaCtrl);
})();