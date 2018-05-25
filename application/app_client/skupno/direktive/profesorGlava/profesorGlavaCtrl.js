(function() {
  /* global angular */
  
  profesorGlavaCtrl.$inject = ['$window','$location', '$route', '$odjava'];
  function profesorGlavaCtrl($window, $location, odjava, $route) {
    var navvm = this;
    
    navvm.ime = $window.localStorage['upIme'];
    console.log(navvm.ime)
   
  };
  
  angular
    .module('estudent')
    .controller('profesorGlavaCtrl', profesorGlavaCtrl);
})();