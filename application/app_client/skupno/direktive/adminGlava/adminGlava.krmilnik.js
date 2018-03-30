(function() {
  /* global angular */
  
  var adminglava = function() {
    return {
      restrict: 'EA',
      templateUrl: "/skupno/direktive/adminGlava/adminGlava.html"
    };
  };
  
  angular
    .module('estudent')
    .directive('adminglava', adminglava);
})();