(function() {
  /* global angular */
  
  var profesorglava = function() {
    return {
      restrict: 'EA',
      replace:true,
      templateUrl: "/skupno/direktive/profesorGlava/profesorGlava.html"
    };
  };
  
  angular
    .module('estudent')
    .directive('profesorglava', profesorglava);
})();