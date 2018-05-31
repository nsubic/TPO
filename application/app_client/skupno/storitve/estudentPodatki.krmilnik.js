(function() {
  /* global angular */
  
  var estudentPodatki = function($http) {
      var obcina = function() {
        return $http.get('/api/obcina/');
      };
      var studijskiProgram = function() {
        return $http.get('/api/studijskiProgram/');
      };
      var letnik = function() {
        return $http.get('/api/letnik/');
      };
      var drzava = function() {
        return $http.get('/api/drzava/');
      };
      var posta = function() {
        return $http.get('/api/posta/');
      };
      var predmet = function() {
        return $http.get('/api/predmet/');
      };
      var vpis = function() {
        return $http.get('/api/vpis/');
      };
      var student = function(id) {
        return $http.get('/api/student/'+id);
      };
      var vpisaniPredmet = function(leto,id) {
        var let1 = leto.split("/")
        return $http.get('/api/vpisaniPredmet/'+id+'/'+parseInt(let1[0])+'/'+parseInt(let1[1]) );
      };
      var studijskoLeto = function() {
        return $http.get('/api/leto/');
      };
      var predmetiProfesorja = function(id) {
        return $http.get('/api/predmetiProfesorja/'+id);
      };
      var dodajKandidate = function(podatki) {
        return $http.post('/api/dodajKandidate/',podatki);
      };
      var dodajStudenta = function(podatki) {
        return $http.post('/api/dodajStudenta/',podatki);
      };
      var dodajOsebe = function(podatki) {
        return $http.post('/api/dodajOsebe/',podatki);
      };
      var dobiOsebe = function() {
        return $http.get('/api/osebe/');
      };
      var najdiUpIme = function(upIme) {
        return $http.get('/api/dobiOsebe/'+upIme);
      };
      var spremeniGeslo = function(podatki) {
        return $http.put('/api/spremeniGeslo/', podatki);
      };
      var studenti = function() {
        return $http.get('/api/studenti/');
      };
      var studentiVpis = function(vpisna) {
        return $http.get('/api/vpisStudent/'+vpisna);
      };
      var vrstaStudija = function(vpisna) {
        return $http.get('/api/vrstaStudija/'+vpisna);
      };
      var student2 = function(upime) {
        return $http.get('/api/student2/'+upime);
      };
      var student3 = function(vpisna) {
        return $http.get('/api/student3/'+vpisna);
      };
      var stVpisanih = function() {
        return $http.get('/api/stVpisanih/');
      };
      var izpiti = function(sifra) {
        return $http.get('/api/izpiti/'+sifra);
      };
      var profesorji = function() {
        return $http.get('/api/profesor/');
      };
      var profesor = function(sifra) {
        return $http.get('/api/profesor/'+sifra);
      };
      var izpit = function() {
        return $http.get('/api/izpit/');
      };
      var nosilecPri = function(sifra) {
        return $http.get('/api/nosilecPri/'+sifra);
      };
      var imePredmeta = function(sifra) {
        return $http.get('/api/imePredmeta/'+sifra);
      };
      var dodajIzpit = function(podatki) {
        return $http.post('/api/dodajIzpit/', podatki);
      };
      var predmet2 = function() {
        return $http.get('/api/predmet2/');
      };
      var izbrisiIzpit = function(sifra) {
        return $http.delete('/api/izpit/'+sifra);
      };
      var vrniTocke = function(sifra) {
        return $http.get('/api/tocke/'+sifra);
      };
      var vrniOcene = function(sifra) {
        return $http.get('/api/ocene/'+sifra);
      };
      var IzbrisiPrijavePoSifri = function(sifra) {
        return $http.delete('/api/prijavljeniIZ/'+ sifra);
      };
      var dobiVsePredmete = function(vpisna) {
        return $http.get('/api/predmetiStudenta/'+vpisna);
      };
       var nosilciInPredmeti = function() {
        return $http.get('/api/nosilciInPredmeti/');
      };
      var vrsteVpisa = function() {
        return $http.get('/api/vrsteVpisa');
      };
      var naciniStudija = function() {
        return $http.get('/api/naciniStudija');
      };
      var nivojiStudija = function() {
        return $http.get('/api/nivojiStudija');
      };
      var odjavaIzpit = function(data) {
        return $http.put('/api/izpit/odjava', JSON.stringify(data));
      }
      var updateOceno = function(data) {
        console.log("data", data);
        return $http.put('/api/dodajOceno/',data);
      }
      var odjaviStudentaRef = function(data) {
        console.log("data", data);
        return $http.put('/api/odjaviStudentaRef/',data);
      }
      var updateOceno1 = function(data) {
        return $http.put('/api/dodajOceno1/',data);
      }
      var prijavljeniNaIzpit = function(sifraIzpita) {
        return $http.get('/api/PrijavljeniNaIzpit/' + sifraIzpita);
      };
      var letoVpisaVPredmet = function(vpisnaSt, predmetSifra) {
        return $http.get('/api/vpisiVPredmetLeto/'+vpisnaSt+'/'+predmetSifra);
      } 
      var podatkiIzpitovZaStudenta = function(sifraStudenta) {
        return $http.get('/api/podatkiIzpitovZaStudenta/' + sifraStudenta);
      };
      var prijavaNaIzpit = function(podatki) {
        return $http.post('/api/prijavaNaIzpit/', podatki);
      };
      var posljiMail = function(podatki) {
        return $http.post('/api/posljiMail/', podatki);
      };
      var pridobiZeton = function(vpisna_st) {
        return $http.get('/api/zetoni/' + vpisna_st);
      };
      var vstaviZeton = function(zeton) {
        return $http.post('/api/zeton', JSON.stringify(zeton));
      };
      var posodobiZeton = function(data) {
        return $http.put('/api/zeton', JSON.stringify(data));
      };
      var izbrisiZeton = function(id) {
        return $http.delete('/api/zeton/' + id);
      };
      return {
        obcina: obcina,
        drzava:drzava,
        posta:posta,
        predmet:predmet,
        vpis:vpis,
        student:student,
        vpisaniPredmet:vpisaniPredmet,
        studijskoLeto:studijskoLeto,
        predmetiProfesorja:predmetiProfesorja,
        dodajKandidate:dodajKandidate,
        dodajStudenta: dodajStudenta,
        dodajOsebe:dodajOsebe,
        dobiOsebe:dobiOsebe,
        najdiUpIme:najdiUpIme,
        spremeniGeslo:spremeniGeslo,
        studenti:studenti,
        studentiVpis:studentiVpis,
        student2:student2,
        studijskiProgram:studijskiProgram,
        letnik:letnik,
        stVpisanih:stVpisanih,
        izpiti:izpiti,
        profesorji:profesorji,
        izpit:izpit,
        dodajIzpit,dodajIzpit,
        nosilecPri:nosilecPri,
        imePredmeta:imePredmeta,
        predmet2:predmet2,
        izbrisiIzpit:izbrisiIzpit,
        dobiVsePredmete:dobiVsePredmete,
        nosilciInPredmeti:nosilciInPredmeti,
        profesor:profesor,
        vrsteVpisa:vrsteVpisa,
        naciniStudija:naciniStudija,
        nivojiStudija:nivojiStudija,
        odjavaIzpit:odjavaIzpit,
        prijavljeniNaIzpit:prijavljeniNaIzpit,
        updateOceno:updateOceno,
        updateOceno1:updateOceno1,
        podatkiIzpitovZaStudenta:podatkiIzpitovZaStudenta,
        prijavaNaIzpit:prijavaNaIzpit,
        dobiZeton: pridobiZeton,
        updateZeton: posodobiZeton,
        IzbrisiPrijavePoSifri:IzbrisiPrijavePoSifri,
        odjaviStudentaRef:odjaviStudentaRef,
        student3:student3,
        vrniTocke:vrniTocke,
        vrniOcene:vrniOcene,
        vstaviZeton:vstaviZeton,
        izbrisiZeton:izbrisiZeton,
        vrstaStudija:vrstaStudija,
        letoVpisaVPredmet:letoVpisaVPredmet,
        posljiMail:posljiMail
      };
    };

  estudentPodatki.$inject = ['$http'];
  
  angular
    .module('estudent')
    .service('estudentPodatki', estudentPodatki);
})();