(function() {
  /* global angular */
  
  referentkaGlavaCtrl.$inject = ['$location', '$route', '$odjava'];
  function referentkaGlavaCtrl($location, $route,odjava) {
    var navvm = this;
     navvm.odjava = function() {
     odjava.odjava();
     $location.path('/');
     $route.reload();
 }
  };
  
  angular
    .module('estudent')
    .controller('referentkaGlavaCtrl', referentkaGlavaCtrl);
})();