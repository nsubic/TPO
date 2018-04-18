  function odjava($window, $http) {

    var odjava = function() {
      $window.localStorage.removeItem('upIme');
      $window.localStorage.removeItem('vloga');
    };

    return {
      odjava: odjava,
    };
  }