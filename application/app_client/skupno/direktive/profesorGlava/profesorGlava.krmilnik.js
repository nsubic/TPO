(function() {
  /* global angular */
  
  var profesorglava = function() {
    return {
      restrict: 'EA',
      replace:true,
      templateUrl: "/skupno/direktive/profesorGlava/profesorGlava.html",
      controller: 'profesorGlavaCtrl',
      controllerAs: 'navvm'
    };
  };
  
  angular
    .module('estudent')
    .directive('profesorglava', profesorglava);
})();