(function() {
  /* global angular */
  var studentGlava = function() {
    return {
      restrict: 'EA',
     templateUrl: '/skupno/direktive/studentGlava/studentGlava.html',
     controller: 'studentGlavaCtrl',
     controllerAs: 'navvm'
    };
  };
  
  angular
    .module('estudent')
    .directive('studentglava', studentGlava);
})();