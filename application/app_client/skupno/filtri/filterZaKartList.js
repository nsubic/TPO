(function() {
  /* global angular */

  var filterZaKartList = function() {

  return function(items,firstArgument,secondArgument){
    var filtered = [];
    var st = 0;
    if(secondArgument == undefined || secondArgument == false){
    angular.forEach(items, function(value, key) {
      if( value.Vpis_studijsko_letoFK == firstArgument){//logic for filtering
        
        if(value.izpit.length > 0){
          for(var i =0; i<value.izpit.length; i++){
            if(value.izpit[i].odjava == 0){
              st++;
              if(i == 0) {
                var tbl;
                tbl = {
                  Predmetnik_sifra_predmetaFK: value.Predmetnik_sifra_predmetaFK,
                  ime: value.ime,
                  KT: value.KT,
                  stevec: st, 
                  izpit: ""
                }
                tbl.izpit = {
                  profesor_ime: value.izpit[i].profesor_ime,
                  datum: value.izpit[i].datum,
                  ocena: value.izpit[i].ocena,
                  stPolaganj: i+1
                };
                this.push(tbl)
              }
              else{
                var tbl;
                tbl = {
                  izpit: ""
                }
                tbl.izpit = {
                  profesor_ime: value.izpit[i].profesor_ime,
                  datum: value.izpit[i].datum,
                  ocena: value.izpit[i].ocena,
                  stPolaganj: i+1
                };
                this.push(tbl)
              }
            }
          }
        }
        else{
          value.stevec = st
          this.push(value);
        }
      }
    }, filtered);
    }
    
    else{
      angular.forEach(items, function(value, key) {
        if( value.Vpis_studijsko_letoFK == firstArgument){//logic for filtering
       
          if(value.izpit.length > 0){
            for(var i =0; i<value.izpit.length; i++){
              if(value.izpit[i].odjava == 0){
                st++;
                if(i == value.izpit.length-1) {
                  var tbl;
                  tbl = {
                    Predmetnik_sifra_predmetaFK: value.Predmetnik_sifra_predmetaFK,
                    ime: value.ime,
                    KT: value.KT,
                    stevec: st, 
                    izpit: ""
                  }
                  tbl.izpit = {
                    profesor_ime: value.izpit[i].profesor_ime,
                    datum: value.izpit[i].datum,
                    ocena: value.izpit[i].ocena,
                    stPolaganj: i+1
                  };
                  this.push(tbl)
                }
              }
            }
          }
          else{
            value.stevec = st
            this.push(value);
          }
        }
      }, filtered);
    }

    return filtered;
    };
  };
  
  angular
    .module('estudent')
    .filter('filterZaKartList', filterZaKartList);
})();