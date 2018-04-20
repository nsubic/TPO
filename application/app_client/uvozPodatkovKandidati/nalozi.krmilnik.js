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
          var t1=text.split("\n")
          for(var i = 0;i < t1.length;i=i+4){
            var ime = t1[i]
            console.log(ime)
            var priimek = t1[i+1]
            console.log(priimek);
            var vrsta = t1[i+2]
            var mail = t1[i+3]
            var prvaStevka = Math.floor(Math.random() * 10);
            var drugaStevka = Math.floor(Math.random() * 10);
            var tretjaStevka = Math.floor(Math.random() * 10);
            var cetrtaStevka = Math.floor(Math.random() * 10);
            
            var prvaCrka = ime[0].toLowerCase();
            var drugaCrka = priimek[0].toLowerCase();
            
            if(prvaCrka == 'č'){
              prvaCrka = 'c';
            }
            else if(prvaCrka == 'š'){
              prvaCrka = 's';

            }
            else if(prvaCrka == 'ž'){
              prvaCrka = 'z';
            }
            
            if(drugaCrka == 'č'){
              drugaCrka = 'c';
            }
            else if(drugaCrka == 'š'){
              drugaCrka = 's';

            }
            else if(drugaCrka == 'ž'){
              drugaCrka = 'z';
            }  
            var upIme = prvaCrka + drugaCrka + prvaStevka + drugaStevka + tretjaStevka + cetrtaStevka + "@student.uni-lj.si";
            geslo = Math.random().toString(36).substr(2, 5);
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
                  var vpisna = zacVpisna;
                  zacVpisna++;

                  var geslo;
                  estudentPodatki.dodajOsebe({
                    upIme:upIme,
                    geslo:geslo,
                    vloga:1
                  }
                  ).then(
                  function success(odgovor) {
                    vm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
                    console.log(osebe)
                  }, 
                  function error(odgovor) {
                    vm.sporocilo = "There was an error!";
                    console.log(odgovor.e);
                  });
                  console.log("pridesm")
                  estudentPodatki.dodajKandidate({
                    ime:ime,
                    priimek:priimek,
                    vrsta:vrsta,
                    mail:mail,
                    vpisna:vpisna,
                    geslo:geslo,
                    upIme:upIme
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