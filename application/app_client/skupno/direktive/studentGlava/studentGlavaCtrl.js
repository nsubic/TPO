(function() {
  /* global angular */
  
  studentGlavaCtrl.$inject = ['$location', 'avtentikacija', '$route'];
  function studentGlavaCtrl($location, avtentikacija, $route) {
    var navvm = this;
    console.log("studentGlavaCtrl");
    navvm.jePrijavljen = avtentikacija.jePrijavljen();
    if(!avtentikacija.jePrijavljen()){
        $location.path('/prijava');
    }
    navvm.trenutniUporabnik = avtentikacija.trenutniUporabnik();
    
    navvm.odjava = function() {
      avtentikacija.odjava();
      $location.path('/');
      $route.reload();
    }
  };
  
  angular
    .module('estudent')
    .controller('studentGlavaCtrl', studentGlavaCtrl);
})();