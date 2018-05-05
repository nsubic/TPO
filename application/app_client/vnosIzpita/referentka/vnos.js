(function() {
  /* global angular */
  vnosIzpitaRef.$inject = ['$scope', 'estudentPodatki','$route'];
  function vnosIzpitaRef($scope, estudentPodatki,$route) {
    var vm = this;
    vm.sporocilo = "Loading professors.";
    
    vm.podatki = {
      profesor: "",
      predmet: "",
      datum:"",
      lokacija:""
    };
    
    estudentPodatki.izpit().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      vm.dataExam = { exams: res.data };
        estudentPodatki.profesorji().then(
        function success(res) {
          console.log("result: ",res.data.response)
          vm.sporocilo = res.data.length > 0 ? "" : "No professors found.";
          vm.dataProf = { prof: res.data.response };
          console.log("Prfoks", vm.dataProf);
            estudentPodatki.predmet().then(
            function success(res) {
              vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
              vm.dataSub = { subjects: res.data.response };
              console.log(vm.dataSub)
            }, 
            function error(res) {
              vm.sporocilo = "There was an error!";
              console.log(res.e);
            });
        }, 
        function error(res) {
          vm.sporocilo = "There was an error!";
          console.log(res.e);
        });
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
    
    vm.dodajIzpit = function(napaka) {
      vm.napakaNaObrazcu = "";
      console.log("profesor", vm.podatki.datum)
      var sifraProfesorja = vm.podatki.profesor.substring(0, 6);
      var sifraPredmeta = vm.podatki.predmeta.substring(0, 5);
      var oseba = estudentPodatki.dodajIzpit({
                            rok:1,
                            Predmet_sifra_predmeta:sifraPredmeta,
                            datum:vm.podatki.datum,
                            lokacija:vm.podatki.lokacija
                          }).then(
      
      )};

  }
  angular
    .module('estudent')
    .controller('vnosIzpitaRef', vnosIzpitaRef);
  

})();