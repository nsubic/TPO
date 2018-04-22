(function() {
  /* global angular */
  vpisniListCtrl.$inject = ['$location', 'estudentPodatki'];
  function vpisniListCtrl($location, estudentPodatki) {
    var vm = this;
    
    //brainstorming:
      //mjbi na zacetku se vprasa studenta kasne vrste vpisa zeli, da mu na podlagi tega dam predmete ki jih lahko izbere, ter predmete ki so avtomatskop dodeljeni,
      // predlagane module, izbirce...
    
    vm.izvediVpis = function() {
      if (true) // ce se bo student prvic vpisal na faks
      {
        // potrebujemo novo vpisno stevilko
        // preverimo ce so pogoji vpisa oz. wateva je ze treba
      }
      else
      {
        // ce ga ze imamo v bazi, potem pa moramo preverjatni kombinacije, kam se voce vpisat
      }
    }
    
    
  }
  
  angular
    .module('estudent')
    .controller('vpisniListCtrl', vpisniListCtrl);
})();