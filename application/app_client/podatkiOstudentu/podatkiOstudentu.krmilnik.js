(function() {
  /* global angular */
  
  podatkiOstudentu.$inject = ['$location','estudentPodatki'];
  function podatkiOstudentu($location,estudentPodatki) {
    
    var vm = this;
    vm.izpis = function() {

    };
  }
  
  angular
    .module('estudent')
    .controller('podatkiOstudentu', podatkiOstudentu);
})();