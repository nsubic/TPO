(function() {
  /* global angular */
  
  profesorGlavaCtrl.$inject = ['$location', '$route', '$odjava'];
  function profesorGlavaCtrl($location, odjava, $route) {
    var navvm = this;
     navvm.odjava = function() {
     odjava.odjava();
     $location.path('/');
     $route.reload();
 }
  };
  
  angular
    .module('estudent')
    .controller('profesorGlavaCtrl', profesorGlavaCtrl);
})();