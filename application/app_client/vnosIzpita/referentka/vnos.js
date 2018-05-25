(function() {
  /* global angular */
  vnosIzpitaRef.$inject = ['$scope', 'estudentPodatki','$route', '$location', '$window'];
  function vnosIzpitaRef($scope, estudentPodatki,$route, $location, $window) {
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
     var odjave = [];
    var i = 0;
    var vpisne = [];
    vm.jeOdjavljen = function(odjavljen, vpisna, cek) {
        var flag = false;
        var index = 0;
          for (var k = 0; k < odjave.length; k++)
          {
            if (vpisna == vpisne[k])
            {
              index = k;
              flag = true;
              break;
            }
          }
          if (flag)
          {
            
            if (odjave[index] == 1)
            {
                return true;
            }
              else
              {
                return false;
              }
          }
          else
          {
            if (true)
            {
              if (odjavljen == 1)
                {
                    vpisne.push(vpisna);
                    odjave.push(odjavljen);
                    i++;
                    return true;
                }
                else
                {
                  vpisne.push(vpisna);
                    odjave.push(odjavljen);
                    i++;
                  return false;
                }
            }
          }
          
    };
    
    vm.shraniSifroIzpit = function(sifra)
    {
      window.localStorage['sifraIzpita'] = sifra;
    }
    
    vm.dodajanjeOcen1 = function(p) {
      vm.napakaNaObrazcu3 = "";
      
      if (p.tocke_na_izpitu != undefined)
      {
        vm.napakaNaObrazcu3 = "Ne smete brisati ce je ze vpisano  st tock, oz. ne smete vpisovati tock pri odjavi studenta.";
        return;
      }
      
      if (p.odjava)
      {
          var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getYear(); 
      x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
        var odja = $window.localStorage['upIme'];
        estudentPodatki.odjaviStudentaRef({
        Izpit_šifra: p.Izpit_šifra,
        Student_vpisna_st: p.Student_vpisna_st,
        odjava: 1,
        cas_odjave: x1,
        odjavitelj: odja
      }).then(
                function success(odgovor) {
                  console.log("Uspelo");
                  alert("Uspešna ojdava");
                }, 
                function error(odgovor) {
                  vm.napakaNaObrazcu3 = "Ni dostopa do baze!";
                  console.log(odgovor.e);
      });
      }
      else
      {
        vm.napakaNaObrazcu3 = "Odjavo dajte na 1.";
            return;
      }
    };
    vm.dodajanjeOcen = function(p) {
      vm.napakaNaObrazcu1 = "";
      if (p.tocke_na_izpitu == undefined && !p.odjava)
      {
        vm.napakaNaObrazcu1 = "Tock niste vnesli";
        return;
      }
      if (p.tocke_na_izpitu > 100 || p.tocke_na_izpitu < 0)
      {
        vm.napakaNaObrazcu1 = "Točk pod 0 in nad 100 ni možno vnesti";
        return;
      }
      if (p.odjava)
      {
          var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getYear(); 
      x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
        var odja = $window.localStorage['upIme'];
        estudentPodatki.updateOceno({
        Izpit_šifra: p.Izpit_šifra,
        Student_vpisna_st: p.Student_vpisna_st,
        ocena: null,
        tocke_na_izpitu: parseInt(p.tocke_na_izpitu),
        odjava: 1,
        cas_odjave: x1,
        odjavitelj: odja
      }).then(
                function success(odgovor) {
                  console.log("Uspelo");
                  alert("Uspešno posodobljena ocena/st.tock!");
                }, 
                function error(odgovor) {
                  vm.napakaNaObrazcu = "Ni dostopa do baze!";
                  console.log(odgovor.e);
      });
      }
      else
      {
        
      estudentPodatki.updateOceno1({
         Izpit_šifra: p.Izpit_šifra,
         Student_vpisna_st: p.Student_vpisna_st,
         ocena: null,
        tocke_na_izpitu: parseInt(p.tocke_na_izpitu)
       }).then(
                 function success(odgovor) {
                   
                   alert("Uspešno posodobljena ocena/st.tock!");
                   $location.reload();
                 }, 
                 function error(odgovor) {
                   vm.napakaNaObrazcu = "Ni dostopa do baze!";
                   console.log(odgovor.e);
       });
      }
    };
    var sifraIz = 0;
    vm.prijavljeniStudenti = function(sifraIzpita) {
      
      console.log(sifraIzpita);
      estudentPodatki.prijavljeniNaIzpit(sifraIzpita).then(
        function success(res) {
          vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
          vm.prijavljeni = { stu: res.data.response };
        }, 
        function error(res) {
          vm.sporocilo = "There was an error!";
          console.log(res.e);
      });
    };
    vm.izbrisi1 = function(sifra) {
      estudentPodatki.IzbrisiPrijavePoSifri(sifra).then(
        function success(res) {
          alert("Uspešno izbrisan izpit in odjavljeni studentje!");
            $location.reload();
        }, 
        function error(res) {
          
          vm.izbris2 = "Napaka pri brisanju izpita."
        });
    }
     vm.izbrisi = function() {
       var sifra = window.localStorage['sifraIzpita'];
       console.log(sifra+"jel ni nisa")
       var pod = vm.prijavljeniStudenti(sifra);
       if (pod != null)
       {
         vm.izbris2 = "Ne smete brisati izpita če so nanj že prijavljeni študentje.";
         return;
       }
       estudentPodatki.izbrisiIzpit(sifra).then(
        function success(res) {
          vm.izbrisi1(sifra);
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
            $location.reload();
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