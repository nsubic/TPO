(function() {
  /* global angular */
  
  var referentkaGlava = function() {
    return {
      restrict: 'EA',
      replace:true,
      templateUrl: "/skupno/direktive/referentkaGlava/referentkaGlava.html",
      controller: 'referentkaGlavaCtrl',
      controllerAs: 'navvm'
    };
  };
  
  angular
    .module('estudent')
    .directive('referentkaglava', referentkaGlava);
})();