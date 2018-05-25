(function() {
  /* global angular */
  
  referentkaGlavaCtrl.$inject = ['$window','$location', '$route'];
  function referentkaGlavaCtrl($window, $location, $route) {
    var navvm = this;
    console.log("HALLLO")
    navvm.ime = $window.localStorage['upIme'];
  };
  
  angular
    .module('estudent')
    .controller('referentkaGlavaCtrl', referentkaGlavaCtrl);
})();