(function() {
  /* global angular */
  

  var profIme = function() {
    return function(x) {
        if(x == undefined) return ''
        var j = ""
        for(var i=1; i<x.split(" ").length; i++)
          j = j+ " "+x.split(" ")[i]
        return j
    };
  };
  
  angular
    .module('estudent')
    .filter('profIme', profIme);
})();