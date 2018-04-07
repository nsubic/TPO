(function() {
  /* global angular */
  
  podatkiStudent.$inject = ['$location','estudentPodatki'];
  function podatkiStudent($location,estudentPodatki) {
    
    var vm = this;
    vm.izpis = function() {

    };
  }
  
  angular
    .module('estudent')
    .controller('podatkiStudent', podatkiStudent);
})();