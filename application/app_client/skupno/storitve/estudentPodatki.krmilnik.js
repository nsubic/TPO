(function() {
  /* global angular */
  
  var estudentPodatki = function($http) {
      var obcina = function() {
        return $http.get('/api/obcina/');
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
        spremeniGeslo:spremeniGeslo
      };
    };

  estudentPodatki.$inject = ['$http'];
  
  angular
    .module('estudent')
    .service('estudentPodatki', estudentPodatki);
})();