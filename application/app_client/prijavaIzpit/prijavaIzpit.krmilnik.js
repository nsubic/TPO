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
    
    vm.dataPredmet = new Array;
    
    estudentPodatki.student2($window.localStorage['upIme']).then(
        function success(res) {
          var counter = 0;
          var vpisna = res.data.response[0].vpisna_st;
               
          // Ta funkcija je za odjavo v View-u 
          vm.odjava = function(sifra) {
            estudentPodatki
              .odjavaIzpit({
                sifra: sifra,
                vpisna_st: vpisna,
              });
          }
          console.log(res.data.response[0].vpisna_st)
            estudentPodatki.dobiVsePredmete(vpisna).then(
              function success(res) {
                console.log(vpisna)
                console.log(res.data.response)
                vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
                vm.dataSifrePr = { sifrePr: res.data.response };
              
              for(var a in vm.dataSifrePr.sifrePr){
                console.log(vm.dataSifrePr.sifrePr[a].Predmetnik_sifra_predmetaFK)
                estudentPodatki.izpiti(vm.dataSifrePr.sifrePr[a].Predmetnik_sifra_predmetaFK).then(
                  function success(res) {
                    vm.dataImena = { imena: res.data.response };
                    console.log(res.data.response)
                    if(res.data.response.length != 0){
                      vm.dataPredmet.push({predmet : vm.dataImena})
                    }
                  },
                  function error(res) {
                    vm.sporocilo = "There was an error!";
                    console.log(res.e);
                });
              }
              },
              function error(res) {
            vm.sporocilo = "There was an error!";
            console.log(res.e);
            });
            counter++;
        }, 
        function error(res) {
          vm.sporocilo = "There was an error!";
          console.log(res.e);
        });


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
