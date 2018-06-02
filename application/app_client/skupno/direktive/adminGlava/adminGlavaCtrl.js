(function() {
  /* global angular */
  
  adminGlavaCtrl.$inject = ['$window','$location', '$route'];
  function adminGlavaCtrl($window,$location, $route) {
    var navvm = this;
    
    navvm.ime = $window.localStorage['upIme'];
  };
    
  
  angular
    .module('estudent')
    .controller('adminGlavaCtrl', adminGlavaCtrl);
})();