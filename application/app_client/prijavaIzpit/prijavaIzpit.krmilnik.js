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
          vm.vpisnaSt = vpisna
          
          estudentPodatki.podatkiIzpitovZaStudenta(vpisna).then(
            function success(res) {
              vm.podatki = { izpiti: res.data.response };
              console.log(vm.podatki.izpiti)
          });
            estudentPodatki.dobiVsePredmete(vpisna).then(
              function success(res) {
                vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
                vm.dataSifrePr = { sifrePr: res.data.response };
                for(var a in vm.dataSifrePr.sifrePr){
                  console.log(vm.dataSifrePr.sifrePr[a].Predmetnik_sifra_predmetaFK)
                  estudentPodatki.izpiti(vm.dataSifrePr.sifrePr[a].Predmetnik_sifra_predmetaFK).then(
                    function success(res) {
                      vm.dataImena = { imena: res.data.response };
                      if(res.data.response.length != 0){
                        for(var i =0; i<res.data.response.length;i++){
                          vm.dataPredmet.push({predmet : vm.dataImena.imena[i]})
                        }
                      }
                    });
                }
              });
            counter++;
        });
        
     console.log(vm.dataPredmet)
        // Ta funkcija je za odjavo v View-u 
    vm.odjava = function(sifra) {
      estudentPodatki
        .odjavaIzpit({
          vpisna_st: vm.vpisnaSt,
          sifra: sifra,
        })
        .then(function() {
          alert("Odjava uspela!");
            location.reload();
        })
    }

    estudentPodatki.predmet().then(
      function success(res) {
        vm.predmeti = { imena: res.data.response };
    });

    vm.prikaziNapako = function(napaka) {
      $scope.$apply(function() {
        vm.sporocilo = napaka.message;
      });
    };
  
    vm.preveriPrijava = function(izpit) {
      for(var i=0; i<vm.podatki.izpiti.length; i++){  
        if(vm.podatki.izpiti[i].Izpit_šifra == izpit.sifra && vm.podatki.izpiti[i].odjava==0){
          return false;
        }
      }
      return true
    };
    
    vm.preveriOpravljen = function(izpit) {
      for(var i=0; i<vm.podatki.izpiti.length; i++){  
        if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].ocena > 5){
          $(':disabled').attr('title', 'Ta predmet ste ze pisali pozitivno.');
          return true;
        }
      }
      return false
    };
    
    vm.preveriOdjava = function(izpit) {
      for(var i=0; i<vm.podatki.izpiti.length; i++){  
        if(vm.podatki.izpiti[i].Izpit_šifra == izpit.sifra && vm.podatki.izpiti[i].odjava==0){
          return true;
        }
      }
      return false
    };

    
 // ------------------------prijava na izpit ------------------------------------------------------------   
  
    vm.prijavi = function(izpit) {
        console.log(izpit)
        var leto = new Date()
        var s = leto.getFullYear();
        
        if(preveriDatum(izpit.datum.split('T')[0]) == 1){  //vec kot 2 dni do izpita, loahko s eprijavi
          var steviloPorabljenihRokov = 0
          var steviloPolaganjLetos = 0
          var datumZadnjegaPolaganja = '2000-01-01' //random datum da je najstarej
          for(var i=0; i<vm.podatki.izpiti.length; i++){   // gre cez vse njegove izpite
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].odjava==0) // preveri za izbrani predmet in samo predmete kjer ni bil odjavlen
              steviloPorabljenihRokov++;
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].odjava==0 && vm.podatki.izpiti[i].datum.split('-')[0] == s) // stevilo polaganj izpita letos
              steviloPolaganjLetos++;
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && (parseDate(vm.podatki.izpiti[i].datum.split('T')[0]).getTime() > parseDate(datumZadnjegaPolaganja).getTime()) && vm.podatki.izpiti[i].odjava==0){        // Preveri kdaj je bil zadnji datum polaganja tega predmeta
              datumZadnjegaPolaganja = vm.podatki.izpiti[i].datum.split('T')[0]
              console.log("datumZadnjegaPolaganja: " + datumZadnjegaPolaganja)
            }
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].odjava==0 && vm.podatki.izpiti[i].ocena==null){ // preveri ce se nima vpisane ocene
              vm.napakaNaObrazcu = "Za ta predmet vam še niso vpisali ocene!";
              return;
            }
          }
        
          console.log(steviloPorabljenihRokov)
          console.log(steviloPolaganjLetos)
          // tuki manjkajo pogoji ki prevrjajo a ma že preveč rokov/a more placat ...
          
          estudentPodatki.prijavaNaIzpit({
              Izpit_sifra:izpit.sifra,
              Student_vpisna_st:vm.vpisnaSt
          }).then(
            function success(res) {
            alert("Uspešno prijava na izpit!")
            location.reload();
          })
          
          
        }
        else{                                             // prepozno
           vm.napakaNaObrazcu = "Na ta izpit se ne morete več prijaviti!";
        }
    };
//---------------------------------------------------------------------------------------------------------
    
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


  }
  
  angular
    .module('estudent')
    .controller('prijavaIzpit', prijavaIzpit);
})();
