(function() {
  /* global angular */
  /* global $ */
  potrditevVpisniListCtrl.$inject = ['$location', '$scope', 'estudentPodatki', '$window'];
  function potrditevVpisniListCtrl($location, $scope, estudentPodatki, $routeParams, $window) {
    var vm = this;
        estudentPodatki.pridobiNeprijavljene().then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      console.log(res.data.response)
      vm.potrdiVpis = { stu: res.data.response };
    }, 
    function error(res) {
      vm.sporocilo = "There was an error!";
      console.log(res.e);
    });
    vm.potrdilo = function(p)
    {
      
      var win = window.open('');
win.document.write($("#potrdiloV").html());

    }
  vm.submit = function(p)
    {
      var win = window.open('','printwindow');
      win.document.write($("#potrdiloV").html());
      win.print();
      win.close();
    }
    vm.potrdi = function(vpisna)
    {
       estudentPodatki.potrdiVpisReferent({
        podatki: vpisna
      }).then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      console.log(res.data.response)
      alert("Uspešno potrjen vpis!")
      location.reload();
    }, 
    function error(res) {
      vm.sporocilo = "There was an error!";
      console.log(res.e);
    });
    }
            }
  
  angular
    .module('estudent')
    .controller('potrditevVpisniListCtrl', potrditevVpisniListCtrl);
})();