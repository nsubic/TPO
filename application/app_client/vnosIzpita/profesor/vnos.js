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
    
    vm.shraniSifroIzpit = function(sifra, datumIzpita, uraIzpita, imeIzpita)
    {
      window.localStorage['sifraIzpita'] = sifra;
      window.localStorage['imeIzpita'] = imeIzpita;
      vm.prijavljeniStudenti(sifra, datumIzpita, uraIzpita);
    }
    
    vm.dodajanjeOcen1 = function(p) {
      vm.napakaNaObrazcu3 = "";
      var x = new Date();
        var x1=x.getFullYear() + "-"  +(((x.getMonth()+1) < 10)?"0":"") + (x.getMonth()+1) + "-" + ((x.getDate() < 10)?"0":"") + x.getDate() + " " +x.getHours() +":"+ x.getMinutes() +":"+ x.getSeconds();
        var odja = $window.localStorage['upIme'];
        var datumTMP = x.getFullYear() + "-"  +(((x.getMonth()+1) < 10)?"0":"") + (x.getMonth()+1) + "-" + ((x.getDate() < 10)?"0":"") + x.getDate();
        var uraTMP = x.getHours();
        var minuteTMP = x.getMinutes();
        var datumIzpita = window.localStorage['datumIzpita'];
        var uraIzpita = window.localStorage['uraIzpita'];
        var minutaIzpita = window.localStorage['minuteIzpita'];
        
        if (p.tocke_na_izpitu == "VP" || p.ocena == "VP")
        {
          
        }
        else
        {
          if (p.tocke_na_izpitu != undefined || p.ocena != undefined)
          {
            vm.napakaNaObrazcu3 = "Ne smete brisati ce je ze vpisano  st tock, oz. ne smete vpisovati tock pri odjavi studenta.";
            return;
          }
        }
      
      
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
    };
    
    
    vm.dodajanjeOcen = function(p) {
      vm.napakaNaObrazcu1 = "";
      var x = new Date();
        var x1=x.getFullYear() + "-"  +(((x.getMonth()+1) < 10)?"0":"") + (x.getMonth()+1) + "-" + ((x.getDate() < 10)?"0":"") + x.getDate() + " " +x.getHours() +":"+ x.getMinutes() +":"+ x.getSeconds();
        var odja = $window.localStorage['upIme'];
        var datumTMP = x.getFullYear() + "-"  +(((x.getMonth()+1) < 10)?"0":"") + (x.getMonth()+1) + "-" + ((x.getDate() < 10)?"0":"") + x.getDate();
        var uraTMP = x.getHours();
        var minuteTMP = x.getMinutes();
        var datumIzpita = window.localStorage['datumIzpita'];
        var uraIzpita = window.localStorage['uraIzpita'];
        var minutaIzpita = window.localStorage['minuteIzpita'];
        
      if (p.ocena == undefined & p.tocke_na_izpitu == undefined)
      {
        vm.napakaNaObrazcu1 = "Vnesiti morate ali končno oceno ali točke izpita oz. oboje.";
        return;
      }
        if (p.ocena != undefined && (p.ocena > 10 || p.ocena < 1))
        {
          vm.napakaNaObrazcu1 = "Končna ocena je lahko med 1 in 10!";
          return;
        }
        
        if (p.tocke_na_izpitu != undefined && (p.tocke_na_izpitu > 100 || p.tocke_na_izpitu < 0))
        {
          vm.napakaNaObrazcu1 = "Točk pod 0 in nad 100 ni možno vnesti";
          return;
        }
      
      if (p.tocke_na_izpitu != undefined || p.ocena != undefined)
      {
         if (parseInt(datumIzpita.substr(0,4)) <= parseInt(datumTMP.substr(0,4)))
        {
          if (parseInt(datumIzpita.substr(5,7)) <= parseInt(datumTMP.substr(5,7)))
          {
            if (parseInt(datumIzpita.substr(8,10)) <= parseInt(datumTMP.substr(8,10)))
            {
            }
            else
            {
              vm.napakaNaObrazcu1 = "Točk/ocen ne morete vpisovati pred izpitnim rokom.";
                    return;
            }
          }
          else
          {
            vm.napakaNaObrazcu1 = "Točk/ocen ne morete vpisovati pred izpitnim rokom.";
                    return;
          }
        }
        else
        {
          vm.napakaNaObrazcu1 = "Točk/ocen ne morete vpisovati pred izpitnim rokom.";
                    return;
        }
      }
      estudentPodatki.updateOceno1({
         Izpit_šifra: p.Izpit_šifra,
         Student_vpisna_st: p.Student_vpisna_st,
         ocena: parseInt(p.ocena),
        tocke_na_izpitu: parseInt(p.tocke_na_izpitu)
       }).then(
                 function success(odgovor) {
                   
                   alert("Uspešno posodobljena ocena/st.tock!");
                  // location.reload();
                 }, 
                 function error(odgovor) {
                   vm.napakaNaObrazcu = "Ni dostopa do baze!";
                   console.log(odgovor.e);
       });
    };
    vm.prijavljeniStudenti = function(sifraIzpita, datumIzpita, uraIzpita) {
      var datum = datumIzpita.substr(0, 10);
      var ure = uraIzpita.substr(0,2);
      var minute = uraIzpita.substr(3,5);
      
      window.localStorage['datumIzpita'] = datum;
      window.localStorage['uraIzpita'] = ure;
      window.localStorage['minuteIzpita'] = minute;
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
            location.reload();
        }, 
        function error(res) {
          
          vm.izbris2 = "Napaka pri brisanju izpita."
        });
    }
     vm.izbrisi = function() {
       vm.napakaNaObrazcu4 = "";
       var sifra = window.localStorage['sifraIzpita'];
       
       estudentPodatki.vrniTocke(sifra).then(
        function success(res) {
          vm.tockeIzpita = { tocke: res.data.response };
         for (var i = 0; i < vm.tockeIzpita.tocke.length; i++)
         {
           if (vm.tockeIzpita.tocke[i].tocke_na_izpitu != null)
            {
              vm.napakaNaObrazcu4 = "Izpita ne smete brisati, če so že vpisane točke.";
              return;
            }
         }
         
         estudentPodatki.vrniOcene(sifra).then(
           function success(res) {
          vm.oceneIzpita = { ocene: res.data.response };
          console.log(vm.oceneIzpita)
             for (var i = 0; i < vm.oceneIzpita.ocene.length; i++)
             {
               if (vm.oceneIzpita.ocene[i].ocena != null)
                {
                  vm.napakaNaObrazcu4 = "Izpita ne smete brisati, če so že vpisane ocene.";
                  return;
                }
             }
             estudentPodatki.izbrisiIzpit(sifra).then(
              function success(res) {
                vm.izbrisi1(sifra);
              }, 
              function error(res) {
                vm.izbris2 = "Napaka pri brisanju izpita."
              });
           }, 
        function error(res) {
          vm.izbris2 = "Napaka pri pridobivanju tock."
        });
          
        }, 
        function error(res) {
          vm.izbris2 = "Napaka pri pridobivanju tock."
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
                              profesor_ime:vm.profesor.pro[0].sifra_profesorja + ' '+ vm.profesor.pro[0].ime +' ' +vm.profesor.pro[0].priimek
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
  
  $('#exampleModalLong').on('hidden.bs.modal', function () {
 location.reload();
})
      
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

