(function() {
  /* global angular */
  
  vnosIzpitaPro.$inject = ['$window', '$location','estudentPodatki', '$scope'];
  function vnosIzpitaPro($window,$location,estudentPodatki, $scope) {
    var vm = this;
    vm.sporocilo = "Loading professors.";
    
    vm.podatki = {
      profesor: "",
      predmet: "",
      datum:"",
      lokacija:""
    };
    
    vm.dataPredmet = new Array;
    
    estudentPodatki.izpit().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      vm.dataExam = { exams: res.data };
       estudentPodatki.nosilecPri($window.localStorage['upIme'].split("@")[0]).then(
            function success(res) {
              vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
              vm.dataPred = { subjects: res.data.response };
              var counter = 0;
              for(var sifra in res.data.response){
                console.log("drekec", sifra)
                console.log("sifra", vm.dataPred.subjects[counter].sifra_predmetaFK)
                
                estudentPodatki.imePredmeta(vm.dataPred.subjects[counter].sifra_predmetaFK).then(
                  function success(res) {
                    vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
                    vm.dataImena = { imena: res.data.response };
                    vm.dataPredmet.push({predmet : vm.dataImena})
                    console.log("Predmet: ",vm.dataPredmet[0].predmet.imena[0].ime_predmeta)
                    console.log("hull", vm.dataImena)
                  },
                  function error(res) {
                vm.sporocilo = "There was an error!";
                console.log(res.e);
                });
                counter++;
                console.log("to",vm.dataPredmet)
              }
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
    .controller('vnosIzpitaPro', vnosIzpitaPro);
})();

