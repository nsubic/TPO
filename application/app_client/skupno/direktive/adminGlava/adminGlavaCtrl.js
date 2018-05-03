(function() {
  /* global angular */
  
  adminGlavaCtrl.$inject = ['$location', '$route', '$odjava'];
  function adminGlavaCtrl($location, odjava, $route) {
    var navvm = this;
    navvm.odjava = function() {
     odjava.odjava();
     $location.path('/');
     $route.reload();
 }
  };
  
  angular
    .module('estudent')
    .controller('adminGlavaCtrl', adminGlavaCtrl);
})();