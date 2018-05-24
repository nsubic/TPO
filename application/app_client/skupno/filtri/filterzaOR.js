(function() {
  /* global angular */
  /* {sifra_profesorja:predmetFilter.sifra_profesorjaFK1 predmetFilter.sifra_profesorjaFK2 predmetFilter.sifra_profesorjaFK3} */

  var filterzaOR = function() {

  return function(items, firstArgument,secondArgument,thirdArgument,forthArgument){
    console.log(items)
            console.log(firstArgument,secondArgument,thirdArgument,forthArgument)
    var filtered = [];
    angular.forEach(items, function(value, key) {
      if((value.sifra_profesorja == firstArgument || value.sifra_profesorja == secondArgument || value.sifra_profesorja == thirdArgument)&&value.sifra_predmeta ==forthArgument){//logic for filtering

        this.push(value);
      }
    }, filtered);
    if(firstArgument==undefined && secondArgument == undefined && thirdArgument == undefined) return items
    return filtered;
    };
  };
  
  angular
    .module('estudent')
    .filter('filterzaOR', filterzaOR);
})();