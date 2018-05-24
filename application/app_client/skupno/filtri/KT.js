(function() {
  /* global angular */

  var KT = function() {

  return function(leto,items){
    var KTtock=0;
    var skpKTtock=0;
    var stPredmetov=0;
    var povprecje=0;
    for(var i = 0; i<items.length; i++){
      if(leto == items[i].Vpis_studijsko_letoFK){
        stPredmetov++;
        KTtock = KTtock + items[i].KT
        if(items[i].izpit.length>0 && items[i].izpit[items[i].izpit.length-1].ocena > 5 ){
          skpKTtock = skpKTtock + items[i].KT
          povprecje = povprecje + items[i].izpit[items[i].izpit.length-1].ocena
        }
      }
    }
    if(povprecje != 0)
    povprecje = povprecje / stPredmetov
    return KTtock
  }
  };
  
  angular
    .module('estudent')
    .filter('KT', KT);
})();