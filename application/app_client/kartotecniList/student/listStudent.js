(function() {
  /* global angular */
  kartotecniListStud.$inject = ['$scope', 'estudentPodatki','$route', '$location','$routeParams'];
  function kartotecniListStud($scope, estudentPodatki,$route, $location,$routeParams) {
    var vm = this;
    var vpisna = $routeParams.vpisna;
    console.log(vpisna)
    
    estudentPodatki.student3(vpisna).then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.data = { studenti: odgovor.data.response };
      $scope.letoFilter = vm.data.studenti[0];
    });
    
    estudentPodatki.dobiVsePredmete(vpisna).then(
    function success(odgovor) {
      vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      vm.pred = { predmeti: odgovor.data.response };
      
      estudentPodatki.predmet().then(
      function success(odgovor) {
        vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
        vm.d = { d: odgovor.data.response };
        for(var i = 0; i<vm.pred.predmeti.length; i++){
          for(var j = 0; j<vm.d.d.length; j++){
              if(vm.pred.predmeti[i].Predmetnik_sifra_predmetaFK == vm.d.d[j].sifra_predmeta){
                 vm.pred.predmeti[i].ime = vm.d.d[j].ime_predmeta
                 vm.pred.predmeti[i].KT = vm.d.d[j].KT_tocke
              }
          }
        }
      });
      estudentPodatki.podatkiIzpitovZaStudenta(vpisna).then(
        function success(odgovor) {
          vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
          vm.izpiti = { predmeti: odgovor.data.response };
          var z =0;
          for(var i = 0; i<vm.pred.predmeti.length; i++){
            vm.pred.predmeti[i].izpit =  new Array;
            for(var j = 0; j<vm.izpiti.predmeti.length; j++){
              if(vm.pred.predmeti[i].Predmetnik_sifra_predmetaFK == vm.izpiti.predmeti[j].Predmet_sifra_predmeta){
                vm.pred.predmeti[i].izpit[z] = vm.izpiti.predmeti[j]
                z++;
              }
            }
            z=0;
          }
          console.log(vm.pred)
        });
    });
    
    $scope.beenAdded = function(){
        return false;
    };
    
    
  }
  angular
    .module('estudent')
    .controller('kartotecniListStud', kartotecniListStud);
  

})();