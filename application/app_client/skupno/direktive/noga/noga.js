(function() {
  /* global angular */
  
  var noga = function() {
    return {
      restrict: 'EA',
      replace:true,
      templateUrl: "/skupno/direktive/noga/noga.html"
    };
  };
  
  angular
    .module('estudent')
    .directive('noga', noga);
})();