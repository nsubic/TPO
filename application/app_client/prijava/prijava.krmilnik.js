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
    vm.prvotnaStran = $location.host() || '/';
    
    console.log("prvotnaStran: ", vm.prvotnaStran);
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
      var oseba = estudentPodatki.najdiUpIme(vm.prijavniPodatki.email).then(
        function success(odgovor) {
          vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih studentov.";
          console.log(odgovor.data.response[0])
          vm.pod = { vpisani: odgovor.data };
           console.log(vm.prijavniPodatki.password);
            console.log(odgovor.data.response[0].geslo);

          if(vm.prijavniPodatki.password == odgovor.data.response[0].geslo){
            console.log("prid");
            if(odgovor.data.response[0].vloga == 1){
              console.log("prid2");
              window.location.replace( "/podatkiStudent");
            }
            if(odgovor.data.response[0].vloga == 2){
              window.location.replace( "/podatkiStudentPro");
            }
            if(odgovor.data.response[0].vloga == 3){
              window.location.replace("/podatkiStudentRef");
            }
            if(odgovor.data.response[0].vloga == 4){
              window.location.replace("/uvozPodatkov");
            }
          }
          else{
            vm.napakaNaObrazcu = "Napačno geslo!";
          }
        console.log(vm.pod.vpisani);
        }, 
        function error(odgovor) {
          vm.napakaNaObrazcu = "Napačno uporabniško ime!";
          console.log(odgovor.e);
      });
    };
  }
  
  angular
    .module('estudent')
    .controller('prijavaCtrl', prijavaCtrl);
})();