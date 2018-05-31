(function() {
  /* global angular */
  vnosIzpitaRef.$inject = ['$scope', 'estudentPodatki','$route', '$window', '$location'];
  function vnosIzpitaRef($scope, estudentPodatki,$route, $window, $location) {
    
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
    
    vm.shraniSifroIzpit = function(sifra, datumIzpita, sifraPredmeta, uraIzpita)
    {
      window.localStorage['sifraIzpita'] = sifra;
      window.localStorage['sifraPredmeta'] = sifraPredmeta;
      window.localStorage['datumIzpita'] = datumIzpita;
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
        
        console.log("datum", datumIzpita)
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
              
              console.log("aloo8")
              vm.napakaNaObrazcu1 = "Točk/ocen ne morete vpisovati pred izpitnim rokom.";
                    return;
            }
          }
          else
          {
            console.log("aloo9")
            vm.napakaNaObrazcu1 = "Točk/ocen ne morete vpisovati pred izpitnim rokom.";
                    return;
          }
        }
        else
        {
          console.log("aloo10")
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
                   //location.reload();
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
          
        
        var mailOptions = {
          from: 'ref@ref',
          to: 'aljaz.erzin@gmail.com',
          subject: 'Izbris izpita',
          text: 'Brisali smo vašo prijavo na izpit!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
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
  vm.preveriOpravljen = function(predmetS) {
    if (vm.podatki.izpiti == undefined)
        return false;
      for(var i=0; i<vm.podatki.izpiti.length; i++){  
        if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == predmetS && vm.podatki.izpiti[i].ocena > 5){
          return true;
        }
      }
      return false
    };
    vm.preveriPrijava = function(izpit) {
      var now = new Date();
      if (vm.podatki.izpiti == undefined)
        return false;
      for(var i=0; i<vm.podatki.izpiti.length; i++){  
        var trenutniIzpit = vm.podatki.izpiti[i];
        if(trenutniIzpit.Izpit_šifra == izpit){
          if(trenutniIzpit.odjava==0) {
            return false;  
          }
        }
      }
      return true;
    };
   vm.prijavi = function(vpisna) {
        //console.log(izpit)
        var napakaNaObrazcu5 = "";
        var leto = new Date()
        vpisna = parseInt(vpisna);
        var izpitS = window.localStorage['sifraIzpita'];
        var datumI = window.localStorage['datumIzpita'];
        var sifraP = window.localStorage['sifraPredmeta'];
        estudentPodatki.podatkiIzpitovZaStudenta(vpisna).then(
            function success(res) {
              vm.podatki = { izpiti: res.data.response };
              var s = leto.getFullYear();
        if(preveriDatum2(datumI) == 1){  //vec kot 2 dni do izpita, loahko s eprijavi
          var steviloPorabljenihRokov = 0
          var steviloPolaganjLetos = 0
          var datumZadnjegaPolaganja = '2000-01-01' //random datum da je najstarej
          var prvoLeto = 0;
          var steviloPolaganjVPrvemLetu = 0;
          if (vm.preveriOpravljen(sifraP))
            {
              vm.napakaNaObrazcu5 = "Ta predmet je student ze pisal pozitivno";
              return;
            }
            if (vm.preveriPrijava(izpitS))
            {
              vm.napakaNaObrazcu5 = "Študent je na izpit že prijavljen";
              return;
            }
          if (vm.podatki.izpiti == undefined)
          {
          }
          else
          {
            
          for(var i=0; i<vm.podatki.izpiti.length; i++){   // gre cez vse njegove izpite
            if(steviloPorabljenihRokov == 0 && vm.podatki.izpiti[i].Predmet_sifra_predmeta == sifraP && vm.podatki.izpiti[i].odjava==0){
              prvoLeto = vm.podatki.izpiti[i].datum.split('-')[0];
            }
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == sifraP && vm.podatki.izpiti[i].odjava==0){ // preveri za izbrani predmet in samo predmete kjer ni bil odjavlen
              steviloPorabljenihRokov++;
              if(vm.podatki.izpiti[i].datum.split('-')[0] == prvoLeto)
                steviloPolaganjVPrvemLetu++;
            }
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == sifraP && vm.podatki.izpiti[i].odjava==0 && vm.podatki.izpiti[i].datum.split('-')[0] == s) // stevilo polaganj izpita letos
              steviloPolaganjLetos++;
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == sifraP && (parseDate(vm.podatki.izpiti[i].datum.split('T')[0]).getTime() > parseDate(datumZadnjegaPolaganja).getTime()) && vm.podatki.izpiti[i].odjava==0){        // Preveri kdaj je bil zadnji datum polaganja tega predmeta
              datumZadnjegaPolaganja = vm.podatki.izpiti[i].datum.split('T')[0]
            }
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == sifraP && vm.podatki.izpiti[i].odjava==0 && vm.podatki.izpiti[i].ocena==null){ // preveri ce se nima vpisane ocene
              vm.napakaNaObrazcu5 = "Za ta predmet vam še niso vpisali ocene!";
            }
          }
          }

          if(steviloPorabljenihRokov != steviloPolaganjVPrvemLetu){
            steviloPorabljenihRokov = (steviloPorabljenihRokov - steviloPolaganjVPrvemLetu);
          }
          //console.log("odstejemo", steviloPorabljenihRokov);
          if(steviloPolaganjLetos > 2){
            vm.napakaNaObrazcu5 = "Letos ste porabili že 3 izpitne roke! Več sreče prihodnje leto!";
          }
          
          if(steviloPorabljenihRokov > 5){
            vm.napakaNaObrazcu5 = "Porabili ste že vse roke. Žal nimate več možnosti nadaljevanje pri tem predmetu!";
          }
          steviloPorabljenihRokov++;
          steviloPolaganjLetos++;
          estudentPodatki.prijavaNaIzpit({
              Izpit_sifra:izpitS,
              Student_vpisna_st:vpisna
          }).then(
            function success(res) {
             if(steviloPorabljenihRokov > 3)
                alert("Uspešna prijava na izpit! To bo vaše skupno " + steviloPorabljenihRokov + " polaganje, zato morate plačati prijavnino, sicer se vam prijava izbriše. Letos pa bo to vaše " + steviloPolaganjLetos + " polaganje.")
              else
                alert("Uspešna prijava na izpit! To bo vaše skupno " + steviloPorabljenihRokov + " polaganje, letos pa bo to vaše " + steviloPolaganjLetos + " polaganje."  )
            location.reload();
          })
          
          
        }
        else{                                             // prepozno
           vm.napakaNaObrazcu5 = "Na ta izpit se ne morete več prijaviti!";
        } 
          },
            function error(res)
            {
              return;
            });
        
    };
//---------------------------------------------------------------------------------------------------------
    function preveriDatum2 (time1) {
      var today = new Date();
      var parsedDate = new Date(time1); // ni potrebno komplicirat, ISO8601 ve JS parsat BP!
      var timeDiff = parsedDate.getTime() - today.getTime(); 
      $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
      console.log("diff", $scope.dayDifference);
      if ($scope.dayDifference > 2 ) {
          return 1
      }
      else{
          return 0
      }
      
    }
    
    function preveriDatum (time1){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      if(dd<10) {
          dd = '0'+dd
      } 
      
      if(mm<10) {
          mm = '0'+mm
      } 
      
      today = yyyy + '-' + mm + '-' + dd;

      // abs ni ok, ker v preteklosti bo bug, in bo spet se lahko na 2dni strejše se prijavil :)
      var timeDiff = Math.abs(parseDate(time1).getTime() - parseDate(today).getTime()); 
      $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if ($scope.dayDifference >= 2 ) {
          return 1
      }
      else{
          return 0
      }
      
    }
    
    function parseDate(input) {
      var parts = input.match(/(\d+)/g);
      // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
      return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
    }
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