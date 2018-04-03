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

      return {
        obcina: obcina,
        drzava:drzava,
        posta:posta

      };
    };

  estudentPodatki.$inject = ['$http'];
  
  angular
    .module('estudent')
    .service('estudentPodatki', estudentPodatki);
})();