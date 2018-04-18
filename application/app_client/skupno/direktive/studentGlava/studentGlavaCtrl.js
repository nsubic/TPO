(function() {
  /* global angular */
  
  studentGlavaCtrl.$inject = ['$window', '$location', '$route', '$odjava'];
  function studentGlavaCtrl($window, $location, odjava, $route) {
    var navvm = this;
    console.log("pride16");
     
  console.log($window.localStorage['upIme']);
    navvm.trenutniUporabnik = $window.localStorage['upIme'];
    console.log(navvm.trenutniUporabnik);
    
    navvm.odjava = function() {
        console.log($window.localStorage["odjava", 'upIme'])
        odjava.odjava();
        $location.path('/');
        $route.reload();
    }
  };
  
  angular
    .module('estudent')
    .controller('studentGlavaCtrl', studentGlavaCtrl);
})();