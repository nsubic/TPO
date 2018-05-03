(function() {
  /* global angular */
  vnosIzpitaRef.$inject = ['$scope', 'estudentPodatki','$route'];
  function vnosIzpitaRef($scope, estudentPodatki,$route) {
    var vm = this;
    vm.sporocilo = "Loading professors.";


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
    
    
    vm.izbrisi = function(id) {
      estudentPodatki.izbrisiExam(id).then(
      function success(odgovor) {
        $route.reload()
      }, 
      function error(odgovor) {
        vm.sporocilo = "There was an error!";
        console.log(odgovor.e);
      });
    };
    
    
    
    vm.posiljanjePodatkov = function(){
        console.log(vm.podatkiObrazca.date)
        estudentPodatki.dodajExam( {
            date: vm.podatkiObrazca.date,
            location: vm.podatkiObrazca.location,
            subject: []
            }).then(
        function success(odgovor) {
            var idExam = odgovor.data._id
            console.log(idExam)
            estudentPodatki.subjectById(vm.podatkiObrazca.subject,).then(
            function success(odgovor) {
                vm.sporocilo = odgovor.data.length > 0 ? "" : "No professors found.";
                vm.dataPred = { pred: odgovor.data };
                estudentPodatki.posodobiExam(idExam,{
                    date: vm.podatkiObrazca.date,
                    location: vm.podatkiObrazca.location,
                    name: vm.dataPred.pred.name,
                    description:vm.dataPred.pred.description,
                    etc:vm.dataPred.pred.etc,
                    semester:vm.dataPred.pred.semester,
                    year:vm.dataPred.pred.year
                }).then(
                function success(res) {
                    $route.reload()
                }, 
                function error(res) {
                  vm.sporocilo = "There was an error!";
                  console.log(res.e);
                });

            },
            function error(odgovor) {
              vm.napakaNaObrazcu = "Napaka pri shranjevanju profesorja, poskusite znova!";
            }
          );
          $route.reload()
        },
        function error(odgovor) {
          vm.napakaNaObrazcu = "Napaka pri shranjevanju profesorja, poskusite znova!";
        }
      );
      return false;
    }

  }
  angular
    .module('estudent')
    .controller('vnosIzpitaRef', vnosIzpitaRef);
  

})();