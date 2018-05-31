(function() {
  /* global angular */
  /* global $ */
  printCtrl.$inject = ['$location', '$scope', 'estudentPodatki', '$routeParams', '$window'];
  function printCtrl($location, $scope, estudentPodatki, $routeParams, $window) {
    var vpisnaSt = $routeParams.vpisnaSt;
    var leto1 = $routeParams.leto1;
    var leto2 = $routeParams.leto2;
    var program = $routeParams.program;
    $scope.vpis = {};
    $scope.tock = 0;
    estudentPodatki
      .studentiVpis(vpisnaSt)
      .then(function(res) {
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