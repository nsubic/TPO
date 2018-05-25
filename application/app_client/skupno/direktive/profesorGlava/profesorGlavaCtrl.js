(function() {
  /* global angular */
  
  profesorGlavaCtrl.$inject = ['$window','$location', '$route', '$odjava'];
  function profesorGlavaCtrl($window, $location, odjava, $route) {
    var navvm = this;
    
    navvm.ime = $window.localStorage['upIme'];
    console.log(navvm.ime)
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