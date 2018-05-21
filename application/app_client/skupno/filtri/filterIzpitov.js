(function() {
  /* global angular */
  /* {sifra_profesorja:predmetFilter.sifra_profesorjaFK1 predmetFilter.sifra_profesorjaFK2 predmetFilter.sifra_profesorjaFK3} */

  var filterIzpitov = function() {

  return function(items){
    var leto = new Date()
    var s = leto.getFullYear();
    var filtered = [];
    angular.forEach(items, function(value, key) {
      if( value.predmet.datum.split('-')[0] == s){//logic for filtering
        this.push(value);
      }
    }, filtered);

    return filtered;
    };
  };
  
  angular
    .module('estudent')
    .filter('filterIzpitov', filterIzpitov);
})();