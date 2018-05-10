(function() {
  /* global angular */
  /* {sifra_profesorja:predmetFilter.sifra_profesorjaFK1 predmetFilter.sifra_profesorjaFK2 predmetFilter.sifra_profesorjaFK3} */

  var filterzaORpro = function() {

  return function(items, firstArgument){
console.log(firstArgument)
    var filtered = [];
    angular.forEach(items, function(value, key) {

      if(value.sifra_predmeta == firstArgument ){//logic for filtering
        console.log(value)
        this.push(value);
      }
    }, filtered);

    if(firstArgument==undefined ) return items
    return filtered;
    };
  };
  
  angular
    .module('estudent')
    .filter('filterzaORpro', filterzaORpro);
})();