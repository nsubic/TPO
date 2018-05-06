(function() {
  /* global angular */
  
  vnosIzpitaPro.$inject = ['$window', '$location','estudentPodatki', '$scope'];
  function vnosIzpitaPro($window,$location,estudentPodatki, $scope) {
    var vm = this;
    vm.sporocilo = "Loading professors.";
    var today = new Date().toISOString().split('.')[0];
    document.getElementsByName("izberiDatum")[0].setAttribute('min', today);
    
    vm.podatki = {
      predmet: "",
      datum:"",
      lokacija:""
    };
    
    vm.dataPredmet = new Array;
    vm.sifraPredmetov = new Array

   estudentPodatki.nosilecPri($window.localStorage['upIme'].split("@")[0]).then(
        function success(res) {
          vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
          vm.dataPred = { subjects: res.data.response };
          var counter = 0;
          for(var sifra in res.data.response){

            
            estudentPodatki.imePredmeta(vm.dataPred.subjects[counter].sifra_predmetaFK).then(
              function success(res) {
                vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
                vm.dataImena = { imena: res.data.response };
                vm.dataPredmet.push({predmet : vm.dataImena})
                vm.sifraPredmetov.push(vm.dataImena.imena[0].sifra_predmeta)
              },
              function error(res) {
            vm.sporocilo = "There was an error!";
            console.log(res.e);
            });
            counter++;
          }
        }, 
        function error(res) {
          vm.sporocilo = "There was an error!";
          console.log(res.e);
        });
    
    estudentPodatki.izpit().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      vm.dataExam = { exams: res.data.response };
    }, 
    function error(res) {
      vm.sporocilo = "There was an error!";
      console.log(res.e);
    });

    vm.izbrisi = function(sifra) {
       console.log(sifra)
        estudentPodatki.izbrisiIzpit(sifra).then(
        function success(res) {
          alert("Uspešno izbrisan izpit!")
            location.reload();
        }, 
        function error(res) {
          vm.izbris2 = "Napaka pri brisanju izpita."
        });
    };

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
    
     vm.dodajIzpit = function(predmet) {
      vm.napakaNaObrazcu = "";
      console.log(predmet)
      console.log(vm.podatki.datum)
      if(vm.podatki.datum == ""){
        vm.uspesno = ""
         vm.napakaNaObrazcu ="Izberite datum in čas izvajanja izpita!";
      }
      var date1 = vm.podatki.datum.toISOString().split('T')
      var date = date1[0] + " " + date1[1].split('.')[0]
      var datum =date.split(' ')[0].split('-')[1]+'-'+date.split(' ')[0].split('-')[2]
      var datum2 =  new Date(date1[0]) 
      if(datum == '01-01' || datum == '01-02' || datum == '02-08' || datum == '04-27' || datum == '05-01' || datum == '05-02' || datum == '06-25'|| datum == '11-01'|| datum == '12-26' || datum == '08-15'|| datum == '10-31'|| datum == '12-25')
      { 
        vm.uspesno = ""
         vm.napakaNaObrazcu = datum.split('-')[1]+'.'+datum.split('-')[0] + " je praznik!";
      }
      else if(datum2.getDay() == 0 || datum2.getDay() == 6)
      { 
         vm.uspesno = ""
         vm.napakaNaObrazcu = datum.split('-')[1]+'.'+datum.split('-')[0] + " je vikend!";
      }
      else if(predmet == undefined)
      { 
         vm.uspesno = ""
         console.log(predmet)
         vm.napakaNaObrazcu = "Izberite predmet iz seznama!";
      }
      else if( options.length == 0)
      { 
         vm.uspesno = ""
         vm.napakaNaObrazcu = "Izberite lokacijo izvajanja izpita!";
      }
      else if(predmet != undefined && date != undefined && options.length != 0){
        estudentPodatki.dodajIzpit({
                              rok:vm.podatki.rok,
                              Predmet_sifra_predmeta:predmet,
                              datum:date,
                              lokacija:options.toString()
                            }).then(
          function success(res) {
            alert("Uspešno dodan izpit!")
            location.reload();
            vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
            vm.res = { exams: res.data };
          }, 
          function error(res) {
            vm.sporocilo = "There was an error!";
            console.log(res.e);
          }
        )
      }
  };
      
      
      
    var options = [];
$( '.dropdown-menu li' ).on( 'click', function( event ) {
   var $target = $(this).find(('a')),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;
   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      options.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();
      
   console.log( options );
   return false;
});

  }
  
  angular
    .module('estudent')
    .controller('vnosIzpitaPro', vnosIzpitaPro);
})();

