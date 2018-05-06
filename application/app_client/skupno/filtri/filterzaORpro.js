(function() {
  /* global angular */
  /* {sifra_profesorja:predmetFilter.sifra_profesorjaFK1 predmetFilter.sifra_profesorjaFK2 predmetFilter.sifra_profesorjaFK3} */

  var filterzaORpro = function() {

  return function(items, firstArgument,secondArgument,thirdArgument){

    var filtered = [];
    angular.forEach(items, function(value, key) {

      if(value.sifra_profesorjaFK1 == firstArgument || value.sifra_profesorjaFK2 == secondArgument || value.sifra_profesorjaFK3 == thirdArgument){//logic for filtering

        this.push(value);
      }
    }, filtered);

    if(firstArgument==undefined && secondArgument == undefined && thirdArgument == undefined) return items
    return filtered;
    };
  };
  
  angular
    .module('estudent')
    .filter('filterzaORpro', filterzaORpro);
})();