(function() {
  /* global angular */
  
  nalozi.$inject = ['$location','estudentPodatki'];
  function nalozi($location,estudentPodatki) {
    
    var vm = this;
    var reader = new FileReader()

    
    vm.uvozi = function(){
      var osebe = {};
      var kandidati = []
      osebe.kandidati = kandidati;
      var input =document.getElementById('fileInput')
      reader.readAsText(input.files[0]);
      reader.onload = function(){
          var text = reader.result;
          var t1=text.split("\n")
          for(var i = 0;i < t1.length;i=i+4){
            var ime = t1[i]
            var priimek = t1[i+1]
            var vrsta = t1[i+2]
            var mail = t1[i+3]
            if(ime == undefined || priimek == undefined || vrsta == undefined || mail == undefined){}
            else{
                var kandidat = {
                  "ime":ime,
                  "priimek":priimek,
                  "vrsta":vrsta,
                  "mail":mail
                }
                osebe.kandidati.push(kandidat)
                //generiraj vpisno, geslo  in upIme
                  var vpisna;
                  var upIme;
                  var geslo;
                  
                  estudentPodatki.dodajKandidate({
                    ime:ime,
                    priimek:priimek,
                    vrsta:vrsta,
                    mail:mail,
                    vpisna:vpisna,
                    upIme:upIme,
                    geslo:geslo
                  }
                    ).then(
                  function success(odgovor) {
                    vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
                    console.log(osebe)
                    vm.data = { osebe };
                    $("#myModal").modal()
                  }, 
                  function error(odgovor) {
                    vm.sporocilo = "There was an error!";
                    console.log(odgovor.e);
                  });
            }
          }
        };
    }

    
  }
  
  angular
    .module('estudent')
    .controller('nalozi', nalozi);
})();