(function() {
  /* global angular */
  

  var profIme = function() {
    return function(x) {
        if(x == undefined) return ''
        
        return x.replace(/[0-9]/g, "")
    };
  };
  
  angular
    .module('estudent')
    .filter('profIme', profIme);
})();