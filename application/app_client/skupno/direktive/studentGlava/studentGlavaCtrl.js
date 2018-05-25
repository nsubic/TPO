(function() {
  /* global angular */
  
  studentGlavaCtrl.$inject = ['$window', '$location', '$route','estudentPodatki'];
  function studentGlavaCtrl($window, $location, $route,estudentPodatki) {
    var navvm = this;
    console.log("pride16");
     
  console.log($window.localStorage['upIme']);
    navvm.trenutniUporabnik = $window.localStorage['upIme'];
    console.log(navvm.trenutniUporabnik);
    navvm.vpisna=""
    
    estudentPodatki.student2($window.localStorage['upIme']).then(
    function success(odgovor) {
      navvm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      navvm.d = { pod: odgovor.data };
      console.log(navvm.d.pod.response)
      navvm.vpisna = navvm.d.pod.response[0].vpisna_st
      console.log(navvm.vpisna)
    })
    
    navvm.ime = $window.localStorage['upIme'];
  };
  
  angular
    .module('estudent')
    .controller('studentGlavaCtrl', studentGlavaCtrl);
})();