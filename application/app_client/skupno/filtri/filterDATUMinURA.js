(function() {
  /* global angular */
  

  var filterDATUMinURA = function() {
    return function(x) {
        var MM = ["januar", "februar","marec","april","maj","junij","julij","avgust","september","oktober","november", "december"]
        console.log()
        var xx = x.replace(
            /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/,
            function($0,$1,$2,$3,$4,$5){
                x = $3+". "+MM[$2-1]+", "+$1
                console.log(x)
                return x
            }
        )
        return x
    };
  };
  
  angular
    .module('estudent')
    .filter('filterDATUMinURA', filterDATUMinURA);
})();