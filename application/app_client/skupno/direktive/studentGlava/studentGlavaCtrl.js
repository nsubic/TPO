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
    console.log("upIme", $window.localStorage['upIme'])
    estudentPodatki.student3($window.localStorage['upIme']).then(
    function success(odgovor) {
      navvm.sporocilo = odgovor.data.length > 0 ? "" : "Ni nobenih predmetov.";
      navvm.d = { pod: odgovor.data };
      console.log("response1",navvm.d)
      navvm.vpisna = navvm.d.pod.response[0].vpisna_st
      console.log("vpisna", navvm.vpisna)
    })
    
    navvm.ime = $window.localStorage['upIme'];
  };
  
  angular
    .module('estudent')
    .controller('studentGlavaCtrl', studentGlavaCtrl);
})();