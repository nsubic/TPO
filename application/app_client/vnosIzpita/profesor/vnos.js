(function() {
  /* global angular */
  
  vnosIzpitaPro.$inject = ['$window', '$location','estudentPodatki', '$scope'];
  function vnosIzpitaPro($window,$location,estudentPodatki, $scope) {
    var vm = this;
    vm.sporocilo = "Loading professors.";
    var today = new Date().toISOString().split('.')[0];
    console.log(today)
    document.getElementById("izberiDatum").setAttribute("min", today);
    
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
    
  estudentPodatki.profesor($window.localStorage['upIme'].split("@")[0]).then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      vm.profesor = { pro: res.data.response };
      console.log(vm.profesor.pro)
    }, 
    function error(res) {
      vm.sporocilo = "There was an error!";
      console.log(res.e);
    });
    vm.prijavljeniStudenti = function(sifraIzpita) {
      $window.localStorage.setItem("sifraI", sifraIzpita);
      console.log("SIFRAAA: ", $window.localStorage.getItem("sifraI"));
      console.log(sifraIzpita);
      estudentPodatki.prijavljeniNaIzpit(sifraIzpita).then(
        function success(res) {
          vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
          vm.prijavljeni = { stu: res.data.response };
          console.log(vm.prijavljeni.stu);
        }, 
        function error(res) {
          vm.sporocilo = "There was an error!";
          console.log(res.e);
      });
    };
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
      console.log(vm.dataPred.subjects[0])
      if(vm.podatki.datum == ""){
        vm.uspesno = ""
         vm.napakaNaObrazcu ="Izberite datum in čas izvajanja izpita!";
      }
      var date = vm.podatki.datum.getMonth()+1
      var datum =date+'-'+vm.podatki.datum.getDate()
      console.log(datum)

      console.log(vm.podatki.datum.getDay())
      
      if(datum == '1-1' || datum == '1-2' || datum == '2-8' || datum == '4-27' || datum == '5-01' || datum == '5-2' || datum == '6-25'|| datum == '11-1'|| datum == '12-26' || datum == '8-15'|| datum == '10-31'|| datum == '12-25')
      { 
        vm.uspesno = ""
         vm.napakaNaObrazcu = datum.split('-')[1]+'.'+datum.split('-')[0] + " je praznik!";
      }
      else if(vm.podatki.datum.getDay() == 0 || vm.podatki.datum.getDay() == 6)
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
      else if(vm.podatki.rok == undefined)
      { 
         vm.uspesno = ""
         console.log(vm.podatki.rok)
         vm.napakaNaObrazcu = "Izberite kateri rok izpita je!";
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
                              datum:vm.podatki.datum,
                              lokacija:options.toString(),
                              ura: vm.podatki.ura,
                              profesor_ime:vm.profesor.pro.sifra_profesorja + ' '+ vm.profesor.pro.ime +' ' +vm.profesor.pro.priimek
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

