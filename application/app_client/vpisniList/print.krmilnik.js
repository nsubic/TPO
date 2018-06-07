(function() {
  /* global angular */
  /* global $ */
  printCtrl.$inject = ['$location', '$scope', 'estudentPodatki', '$routeParams', '$window'];
  function printCtrl($location, $scope, estudentPodatki, $routeParams, $window) {
    var vpisnaSt = $routeParams.vpisnaSt;
    var leto1 = $routeParams.leto1;
    var leto2 = $routeParams.leto2;
    var program = $routeParams.program;
    $scope.drzave = [];
    $scope.programi = [];
    $scope.vpis = {};
    $scope.tock = 0;
    estudentPodatki
      .drzava()
      .then(function(res) {
        console.log("drzave", res.data.response);
        $scope.drzave = res.data.response;
        
        
        estudentPodatki
      .studijskiProgram()
      .then(function(res) {
        console.log("program", res);
        $scope.programi = res.data.response;
      });
    estudentPodatki
      .obcina()
      .then(function(res) {
        console.log("obcine", res);
        $scope.obcine = res.data.response;
      })
    estudentPodatki
      .studentiVpis(vpisnaSt)
      .then(function(res) {
        console.log("vpis?", res.data.response);
        var currents = $.grep(res.data.response, function(data) {
          return data.sifra_stProgramFK === program && data.studijsko_letoFK === [leto1, leto2].join("/");
        })
        
        var current = currents[0];
        console.log("vpis", current);
        
        $scope.vpis.letnik = current.letnikFK;
        $scope.vpis.program = current.sifra_stProgramFK;
        $scope.vpis.vrsta_vpisa = current.eins;
      })
    estudentPodatki
      .predmet()
      .then(function(res) {
        console.log("predmet...", res);
        $scope.sifrantPredmetov = res.data.response;
      })
    estudentPodatki
      .student(vpisnaSt)
      .then(function(res) {
        console.log("student", res);
        
        var data = res.data.response[0];
      
        for(var key in data) {
          var partial = data[key];
          try {
            if(key.indexOf("datum") >= 0) {
              partial = new Date(Date.parse(data[key]));
            } else if(key === "naslov_vrocanje") {
              partial = data[key] === 1 ? true : false;
            }
          } catch(ex) {
          }
          
          switch($scope.vpis.spol){
            case 0:
              $scope.vpis.spol_opis = "Neznan";
              break;
            case 1:
              $scope.vpis.spol_opis = "Ženski";
              break;
            case 2:
              $scope.vpis.spol_opis = "Moški"
              break;
          }
          
          var drzave_rojstva = $.grep($scope.drzave, function(data) {
            return data.dvomestna_koda === $scope.vpis.Drzava_rojstva;
          })
          
          if(drzave_rojstva.length) {
            $scope.vpis.drzava_rojstva_opis = drzave_rojstva[0].slo_naziv;  
          }
          
          
          var drzave_stalnega = $.grep($scope.drzave, function(data) {
            return data.dvomestna_koda === $scope.vpis.stalni_drzava_koda;
          });
          
          if(drzave_stalnega.length) {
            $scope.vpis.stalni_drzava = drzave_stalnega[0].slo_naziv;  
          }
          
          
          var drzave_zacasnega = $.grep($scope.drzave, function(data) {
            return data.dvomestna_koda === $scope.vpis.zacasni_drzava_koda;
          })
          if(drzave_zacasnega.length) {
            $scope.vpis.zacasni_drzava = drzave_zacasnega[0].slo_naziv;  
          }
          
          $scope.vpis.datum_rojstva_opis = new Date(Date.parse($scope.vpis.datum_rojstva)).toLocaleDateString("sl-SI");
          
          var programseek = $.grep($scope.programi, function(data) {
            return data.sifra_stProgram === $scope.vpis.program;
          })
          
          if(programseek.length) {
            $scope.vpis.program_opis = programseek[0].naziv;
          }
          
          var obcinaseek = $.grep($scope.obcine, function(data) {
            return data.sifra_obcine === $scope.vpis.stalni_obcina_koda;
          })
          
          if(obcinaseek.length) {
            $scope.vpis.stalni_obcina_koda_opis = obcinaseek[0].ime_obcine;
          }
          
          var zacObcinaSeek = $.grep($scope.obcine, function(data) {
            return data.sifra_obcine === $scope.vpis.zacasni_obcina_koda;
          })
          
          if(zacObcinaSeek.length) {
            $scope.vpis.zacasni_obcina_koda_opis = zacObcinaSeek[0].ime_obcine;
          }

          $scope.vpis[key] = partial;
        }
      });
      
    estudentPodatki.dobiVsePredmete(vpisnaSt).then(
    function (res) {
      console.log("predmeti", res);
      var predmeti = $.grep(res.data.response, function(data) {
        return data.Vpis_studijsko_letoFK === [leto1, leto2].join("/") && data.Vpis_sifra_stProgramFK === program;
      });
      $scope.predmeti = $.map(predmeti, function(data) {
        var nazivi = $.grep($scope.sifrantPredmetov, function(data2) {
          return data2.sifra_predmeta === data.Predmetnik_sifra_predmetaFK;
        });
        data.naziv = nazivi[0].ime_predmeta;
        data.tocke = nazivi[0].KT_tocke;
        return data;
      });
      
      
      $.each($scope.predmeti, function(idx, data) {
        console.log("sum", $scope.tock, data);
        $scope.tock += data.tocke;
      })
    });
      });
      
    
      
      $scope.print = print;
    
    console.log("route params", vpisnaSt, leto1, leto2, program);
  }
  
  function print() {

    window.print();
    return;
    var source = $(document.body)[0];
    console.log(source)
    DocRaptor.createAndDownloadDoc("YOUR_API_KEY_HERE", {
            test: true, // test documents are free, but watermarked
            type: "pdf",
            document_content: source.innerHTML, // use this page's HTML
            // document_content: "<h1>Hello world!</h1>",               // or supply HTML directly
            // document_url: "http://example.com/your-page",            // or use a URL
            // javascript: true,                                        // enable JavaScript processing
             prince_options: {
               media: "print",                                       // use screen styles instead of print styles
             }
      })
}

  
  angular
    .module('estudent')
    .controller('printCtrl', printCtrl);
})();