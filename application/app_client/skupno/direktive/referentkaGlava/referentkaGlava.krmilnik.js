(function() {
  /* global angular */
  
  var referentkaglava = function() {
    return {
      restrict: 'EA',
      replace:true,
      templateUrl: "/skupno/direktive/referentkaGlava/referentkaGlava.html",
      controller: 'referentkaglavaCtrl',
      controllerAs: 'navvm'
    };
  };
  
  angular
    .module('estudent')
    .directive('referentkaglava', referentkaglava);
})();