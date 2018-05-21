(function() {
  /* global angular */
  

  var predmetiSifre = function() {
    return function(x,predmeti) {
        var j ;
        for(var i = 0; i<predmeti.length; i++){
          if(x == predmeti[i].sifra_predmeta)  {
            j=predmeti[i].sifra_predmeta + ' - ' +  predmeti[i].ime_predmeta
            return predmeti[i].sifra_predmeta + ' - ' +  predmeti[i].ime_predmeta
          }
        }

        return j
    };
  };
  
  angular
    .module('estudent')
    .filter('predmetiSifre', predmetiSifre);
})();