(function() {
  /* global angular */
  
  podatkiStudent.$inject = ['$window','$location','estudentPodatki'];
  function podatkiStudent($window, $location,estudentPodatki) {
    console.log($window.localStorage['upIme']);
    var vm = this;
    vm.izpis = function() {

    };
  }
  
  angular
    .module('estudent')
    .controller('podatkiStudent', podatkiStudent);
})();