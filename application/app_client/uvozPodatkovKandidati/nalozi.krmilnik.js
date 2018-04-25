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
      
      var osebe1 = {};
      var kandidati1 = []
      osebe1.kandidati1 = kandidati1;
      
      var sifra = 63
      var leto = new Date().getFullYear().toString().substr(-2)
      var zacVpisna = sifra;
      zacVpisna = zacVpisna + leto;
      zacVpisna=zacVpisna*10000;
      zacVpisna++
      var input =document.getElementById('fileInput')
      reader.readAsText(input.files[0], 'ISO-8859-1');
      reader.onload = function(){
          var text = reader.result;
          var re=/\r\n|\n\r|\n|\r/g;
          var t1=text.replace(re,"\n").split("\n");
          for(var i = 0;i < t1.length;i=i+1){
            var t2 = t1[i].split(" ")
            var ime = t2[0]
            var priimek = t2[1]
            var vrsta = t2[2]
            var mail = t2[3]
            var upIme = mail;
            var geslo = Math.random().toString(36).substr(2, 5);
            
            if(ime == undefined || priimek == undefined || vrsta == undefined || mail == undefined){}
            else{
                var kandidat = {
                  "ime":ime,
                  "priimek":priimek,
                  "vrsta":vrsta,
                  "mail":mail,
                  "geslo":geslo
                }
                
                osebe.kandidati.push(kandidat)
                 estudentPodatki.najdiUpIme(upIme).then(
                  function success(odgovor) {
                    vm.d = { pod: odgovor.data };
                    
                    if(vm.d.pod.response[0]!=undefined){ }
                    else{
                      for (var j in kandidati){
                       
                        if(kandidati[j].mail == odgovor.config.url.split("/")[3]){
                          var vpisna = zacVpisna;
                          zacVpisna++;
                          var kandidat1 = {
                            "ime":kandidati[j].ime,
                            "priimek":kandidati[j].priimek,
                            "vrsta":kandidati[j].vrsta,
                            "mail":kandidati[j].mail,
                            "geslo":kandidati[j].geslo
                          }
                          osebe1.kandidati1.push(kandidat1)
                          estudentPodatki.dodajOsebe({
                            upIme:kandidati[j].mail,
                            geslo:kandidati[j].geslo,
                            vloga:1
                          }
                          ).then(
                          function success(odgovor) {
                            vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
                            console.log(osebe1)
                          }, 
                          function error(odgovor) {
                            vm.sporocilo = "There was an error!";
                            console.log(odgovor.e);
                          });
                          console.log("pridesm")
                          estudentPodatki.dodajKandidate({
                            ime:kandidati[j].ime,
                            priimek:kandidati[j].priimek,
                            vrsta:kandidati[j].vrsta,
                            mail:kandidati[j].mail,
                            vpisna:vpisna,
                            geslo:kandidati[j].geslo,
                            upIme:kandidati[j].mail
                          }
                            ).then(
                          function success(odgovor) {
                            vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
                            console.log(osebe1)
                            vm.data = { osebe1 };
                            $("#myModal").modal()
                          }, 
                          function error(odgovor) {
                            vm.sporocilo = "There was an error!";
                            console.log(odgovor.e);
                          });
                        }
                      }
                      
                    }

                  }, 
                  function error(odgovor) {
                    vm.sporocilo = "There was an error!";
                    console.log(odgovor.e);
                  });
                
            }
          }
        };

           $("#myModal").modal()
    }

    
  }
  
  angular
    .module('estudent')
    .controller('nalozi', nalozi);
})();