(function() {
  /* global angular */
  
  prijavaIzpit.$inject = ['$window', '$location','estudentPodatki', '$scope'];
  function prijavaIzpit($window,$location,estudentPodatki, $scope) {
    var vm = this;
    
    //console.log($window.localStorage['upIme'])
    
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
          
          estudentPodatki.vrstaStudija(vm.vpisnaSt).then(
            function success(res) {
            vm.nacinVpisa = { leto: res.data.response };
            //console.log(vm.vpisnaSt)
            //console.log(vm.nacinVpisa.leto.length)
            //console.log("nacin vpisa", vm.nacinVpisa);
          });
          
          estudentPodatki.podatkiIzpitovZaStudenta(vpisna).then(
            function success(res) {
              vm.podatki = { izpiti: res.data.response };
              //console.log(vm.podatki.izpiti)
          });
            estudentPodatki.dobiVsePredmete(vpisna).then(
              function success(res) {
                vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
                vm.dataSifrePr = { sifrePr: res.data.response };
                for(var a in vm.dataSifrePr.sifrePr){
                  //console.log(vm.dataSifrePr.sifrePr[a].Predmetnik_sifra_predmetaFK)
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
        
     //console.log(vm.dataPredmet)
        // Ta funkcija je za odjavo v View-u 
    vm.odjava = function(izpit) {
      
      if(preveriDatum2(izpit.datum) == 1){
        estudentPodatki
          .odjavaIzpit({
            vpisna_st: vm.vpisnaSt,
            sifra: izpit.sifra,
            odjavitelj: $window.localStorage['upIme'],
          })
          .then(function() {
            alert("Uspešna odjava od izpita!")
              location.reload();
          })
      } else {
        vm.napakaNaObrazcu = "Od tega izpita se ne morete več odjaviti!";
      }
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
      var now = new Date();
      for(var i=0; i<vm.podatki.izpiti.length; i++){  
        var trenutniIzpit = vm.podatki.izpiti[i];
        if(trenutniIzpit.Izpit_šifra == izpit.sifra){
          if(trenutniIzpit.odjava==0) {
            return false;  
          }
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
        //console.log(izpit)
        var leto = new Date()
        var s = leto.getFullYear();
        
        if(preveriDatum2(izpit.datum) == 1){  //vec kot 2 dni do izpita, loahko s eprijavi
          var steviloPorabljenihRokov = 0
          var steviloPolaganjLetos = 0
          var datumZadnjegaPolaganja = '2000-01-01' //random datum da je najstarej
          var prvoLeto = 0;
          var steviloPolaganjVPrvemLetu = 0;
          var prevecDni = 0;
          for(var i=0; i<vm.podatki.izpiti.length; i++){   // gre cez vse njegove izpite
            if(vm.podatki.izpiti[i].odjava==0){
              console.log("datumi", vm.podatki.izpiti[i].datum)
              console.log("datum novega izpita:", izpit.datum)
              var casZadnjega = new Date(vm.podatki.izpiti[i].datum);
              var casNovega = new Date(izpit.datum);
              var timeDiff = Math.abs(casZadnjega.getTime() - casNovega.getTime());
              var prevecDni = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
              console.log("razlika", prevecDni);
              
              if(prevecDni < 10){
              vm.napakaNaObrazcu = "Od zadnjega roka še ni preteklo 10 dni!";
              return;
              }
            } 
            if(steviloPorabljenihRokov == 0 && vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].odjava==0){
              prvoLeto = vm.podatki.izpiti[i].datum.split('-')[0];
            }
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].odjava==0){ // preveri za izbrani predmet in samo predmete kjer ni bil odjavlen
              steviloPorabljenihRokov++;
              if(vm.podatki.izpiti[i].datum.split('-')[0] == prvoLeto)
                steviloPolaganjVPrvemLetu++;
            }
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].odjava==0 && vm.podatki.izpiti[i].datum.split('-')[0] == s) // stevilo polaganj izpita letos
              steviloPolaganjLetos++;
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && (parseDate(vm.podatki.izpiti[i].datum.split('T')[0]).getTime() > parseDate(datumZadnjegaPolaganja).getTime()) && vm.podatki.izpiti[i].odjava==0){        // Preveri kdaj je bil zadnji datum polaganja tega predmeta
              console.log("pride sm notr")
              datumZadnjegaPolaganja = vm.podatki.izpiti[i].datum.split('T')[0]
            }
            if(vm.podatki.izpiti[i].Predmet_sifra_predmeta == izpit.Predmet_sifra_predmeta && vm.podatki.izpiti[i].odjava==0 && vm.podatki.izpiti[i].ocena==null){ // preveri ce se nima vpisane ocene
              vm.napakaNaObrazcu = "Za ta predmet vam še niso vpisali ocene!";
              return;
            }
          }
          console.log(parseDate(datumZadnjegaPolaganja).getTime())
          console.log("datum izpita", izpit.datum);
          
          
          console.log("vpisna: ", vm.vpisnaSt)
          console.log("izpit: ", izpit.Predmet_sifra_predmeta)
          vm.letoPrvega = ""
          estudentPodatki.letoVpisaVPredmet(
              vm.vpisnaSt,
              izpit.Predmet_sifra_predmeta
          ).then(
              function success(res) {
                vm.Vpis = { leto: res.data.response };
                console.log("leta: ",vm.Vpis.leto[0].Vpis_studijsko_letoFK)
                vm.letoPrvega = vm.Vpis.leto[0].Vpis_studijsko_letoFK;
            
            
                
                var seRokiZbrisejo = 0
                console.log("podatki izpita", vm.podatki.izpiti.length)
                if(vm.podatki.izpiti.length > 0){
                  console.log("podatki izpita", vm.podatki.izpiti[0].datum.split('-')[0])
                  if(vm.podatki.izpiti[0].datum.split('-')[0] > 0){
                    console.log("prvi izpit", vm.podatki.izpiti[0].datum.split('-')[0])
                    console.log("prvi vpis", vm.letoPrvega.split('/')[1])
                  
                    if(vm.letoPrvega.split('/')[1] == vm.podatki.izpiti[0].datum.split('-')[0]){
                      seRokiZbrisejo = 1;
                    }
                  }
                }
                console.log("brisanje rokov", seRokiZbrisejo)
                var steviloLet = vm.nacinVpisa.leto.length - 1;
                var nacinStudija = vm.nacinVpisa.leto[steviloLet].vrsta_vpisaFK;
                console.log("nacinStudija", nacinStudija)
                console.log(steviloPorabljenihRokov, " ", steviloPolaganjVPrvemLetu)
                if((steviloPorabljenihRokov != steviloPolaganjLetos) && seRokiZbrisejo==1){
                  steviloPorabljenihRokov = (steviloPorabljenihRokov - steviloPolaganjVPrvemLetu);
                }
                console.log("odstejemo", steviloPorabljenihRokov);
                if(steviloPolaganjLetos > 2){
                  vm.napakaNaObrazcu = "Letos ste porabili že 3 izpitne roke! Več sreče prihodnje leto!";
                    return;
                }
                
                if(steviloPorabljenihRokov > 5){
                  vm.napakaNaObrazcu = "Porabili ste že vse roke. Žal nimate več možnosti nadaljevanje pri tem predmetu!";
                    return;
                }
                steviloPorabljenihRokov++;
                steviloPolaganjLetos++;
                estudentPodatki.prijavaNaIzpit({
                    Izpit_sifra:izpit.sifra,
                    Student_vpisna_st:vm.vpisnaSt
                }).then(
                  function success(res) {
                    if(nacinStudija == 0000000009)
                      alert("Uspešna prijava na izpit! To bo vaše skupno" + steviloPorabljenihRokov + " polaganje, letos pa bo to vaše" + steviloPolaganjLetos + " polaganje. Ker niste redno vpisani, morate plačati prijavo na izpit, sicer se vam prijava izbriše.")
                    else if(steviloPorabljenihRokov > 3)
                      alert("Uspešna prijava na izpit! To bo vaše skupno " + steviloPorabljenihRokov + " polaganje, zato morate plačati prijavnino, sicer se vam prijava izbriše. Letos pa bo to vaše " + steviloPolaganjLetos + " polaganje.")
                    else
                      alert("Uspešna prijava na izpit! To bo vaše skupno " + steviloPorabljenihRokov + " polaganje, letos pa bo to vaše " + steviloPolaganjLetos + " polaganje."  )
                  location.reload();
                })
          })
          
        }
        else{                                             // prepozno
           vm.napakaNaObrazcu = "Na ta izpit se ne morete več prijaviti!";
        }
    };
//---------------------------------------------------------------------------------------------------------
    function preveriDatum2 (time1) {
      var today = new Date();
      var parsedDate = new Date(time1); // ni potrebno komplicirat, ISO8601 ve JS parsat BP!
      var timeDiff = parsedDate.getTime() - today.getTime(); 
      $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
      //console.log("diff", $scope.dayDifference);
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


  }
  
  angular
    .module('estudent')
    .controller('prijavaIzpit', prijavaIzpit);
})();
