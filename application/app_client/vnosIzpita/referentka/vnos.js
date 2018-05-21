(function() {
  /* global angular */
  vnosIzpitaRef.$inject = ['$scope', 'estudentPodatki','$route'];
  function vnosIzpitaRef($scope, estudentPodatki,$route) {
    var vm = this;
    vm.sporocilo = "Loading professors.";
    


    vm.podatki = {
      profesor: "",
      predmet: "",
      rok: "",
      datum:"",
      lokacija:"",
      ura:""
    };
    
    estudentPodatki.predmet2().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      vm.dataSub = { subjects: res.data.response };
    }, 
    function error(res) {
      vm.sporocilo = "There was an error!";
      console.log(res.e);
    });
    
    estudentPodatki.studijskoLeto().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      vm.leto = { leto: res.data.response };
    }, 
    function error(res) {
      vm.sporocilo = "There was an error!";
      console.log(res.e);
    });
    
    estudentPodatki.profesorji().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      vm.yolo = { solo: res.data.response };
          estudentPodatki.nosilciInPredmeti().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No professors found.";
      vm.dataProf = { prof: res.data.response };
      for(var i=0; i<vm.dataProf.prof.length; i++){
        if(vm.dataProf.prof[i].sifra_profesorjaFK2 == null)
          delete vm.dataProf.prof[i].sifra_profesorjaFK2
        else{
          for(var j=0; j<vm.yolo.solo.length; j++){
            if(vm.yolo.solo[j].sifra_profesorja == vm.dataProf.prof[i].sifra_profesorjaFK2){
              vm.dataProf.prof[i].ime_profesorja2= vm.yolo.solo[j].ime 
              vm.dataProf.prof[i].priimek_profesorja2= vm.yolo.solo[j].priimek 
            }
          }
        }
        if(vm.dataProf.prof[i].sifra_profesorjaFK3 == null)
          delete vm.dataProf.prof[i].sifra_profesorjaFK3
        else{
          for(var j=0; j<vm.yolo.solo.length; j++){
            if(vm.yolo.solo[j].sifra_profesorja == vm.dataProf.prof[i].sifra_profesorjaFK3){
              vm.dataProf.prof[i].ime_profesorja3=  vm.yolo.solo[j].ime 
              vm.dataProf.prof[i].priimek_profesorja3= vm.yolo.solo[j].priimek 
            }
          }
        }
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
    
    
    

    
    
    estudentPodatki.izpit().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      console.log(res.data.response)
      vm.dataExam = { exams: res.data.response };
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
    
    vm.dodajIzpit = function(profesor,predmet) {
      vm.napakaNaObrazcu = "";
      console.log(profesor)
      console.log(predmet)
      console.log(vm.podatki.datum)
      console.log(vm.podatki.rok)
      console.log(vm.podatki.ura)
      if(vm.podatki.datum == ""){
        vm.uspesno = ""
         vm.napakaNaObrazcu ="Izberite datum izvajanja izpita!";
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
      else if(profesor == undefined)
      { 
         vm.uspesno = ""
         console.log(profesor)
         vm.napakaNaObrazcu = "Izberite profesorja iz seznama!";
      }
      else if( options.length == 0)
      { 
         vm.uspesno = ""
         vm.napakaNaObrazcu = "Izberite lokacijo izvajanja izpita!";
      }
      else if(predmet != undefined && date != undefined && options.length != 0){
        var pro_ime
        if(profesor.sifra_profesorjaFK2== null)
          pro_ime =  profesor.sifra_profesorja  +' '+profesor.ime+' '+profesor.priimek
        else
        pro_ime = profesor.sifra_profesorja  +' '+profesor.ime+' '+profesor.priimek+'; '+profesor.sifra_profesorjaFK2 +  ' ' + profesor.ime_profesorja2 + ' ' + profesor.priimek_profesorja2 + '; ' + profesor.sifra_profesorjaFK3 + ' ' + profesor.ime_profesorja3 + ' ' + profesor.priimek_profesorja3
        estudentPodatki.dodajIzpit({
                              rok:vm.podatki.rok,
                              Predmet_sifra_predmeta:predmet,
                              datum:vm.podatki.datum,
                              lokacija:options.toString(),
                              ura: vm.podatki.ura,
                              profesor_ime: pro_ime
                              
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
    .controller('vnosIzpitaRef', vnosIzpitaRef);
  

})();