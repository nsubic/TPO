(function() {
  /* global angular */
  
  studentGlavaCtrl.$inject = ['$location', '$route'];
  function studentGlavaCtrl($location, avtentikacija, $route) {
    var navvm = this;

  };
  
  angular
    .module('estudent')
    .controller('studentGlavaCtrl', studentGlavaCtrl);
})();