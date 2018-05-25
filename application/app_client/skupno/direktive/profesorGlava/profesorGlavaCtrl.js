(function() {
  /* global angular */
  
  profesorGlavaCtrl.$inject = ['$window','$location', '$route'];
  function profesorGlavaCtrl($window, $location, $route) {
    var navvm = this;
    
    navvm.ime = $window.localStorage['upIme'];
  };
  
  angular
    .module('estudent')
    .controller('profesorGlavaCtrl', profesorGlavaCtrl);
})();