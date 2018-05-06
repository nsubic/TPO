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
        return $http.post('/api/posta/');
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
      var student2 = function(upime) {
        return $http.get('/api/student2/'+upime);
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
        izbrisiIzpit:izbrisiIzpit
      };
    };

  estudentPodatki.$inject = ['$http'];
  
  angular
    .module('estudent')
    .service('estudentPodatki', estudentPodatki);
})();