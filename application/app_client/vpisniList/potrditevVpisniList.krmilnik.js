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
      console.log("Potrdilo", p.vpisna_st)
      window.localStorage['vpisnaPreveri'] = p.vpisna_st;
      var win = window.open('');
    win.document.write($("#potrdiloV").html());

    }
    vm.preveriVpisno = function(vpisna)
    {
        console.log("vpisna prava", vpisna, window.localStorage['vpisnaPreveri'] )
        var vpisnaShrani = parseInt(window.localStorage['vpisnaPreveri']);
        console.log("vpisn1 ", vpisnaShrani);
        if (vpisnaShrani == vpisna)
        {
          return true;
        }
        else
          return false;
    }
  vm.submit = function(p)
    {
      window.localStorage['vpisnaPreveri'] = p.vpisna_st;
      var win = window.open('','printwindow');
      win.document.write($("#potrdiloV").html());
      win.print();
      win.close();
    }
    vm.potrdi = function(vpisna)
    {
      
      window.localStorage['vpisnaPreveri'] = vpisna;
      console.log("vpisna", vpisna)
       estudentPodatki.potrdiVpisReferent({
        podatki: vpisna
      }).then(
    function success(res) {
      vm.sporocilo = res.data.length > 0 ? "" : "No exams found.";
      console.log(res.data.response)
    }, 
    function error(res) {
      vm.sporocilo = "There was an error!";
      console.log(res.e);
    });
    }
    $('#natisniPotrdila').on('hidden.bs.modal', function () {
    location.reload();
  })     
  }
  angular
    .module('estudent')
    .controller('potrditevVpisniListCtrl', potrditevVpisniListCtrl);
})();