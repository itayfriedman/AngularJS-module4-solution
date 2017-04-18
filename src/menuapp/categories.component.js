(function (){
'use strict';

  angular.module('MenuApp')
  .component('categoriesList', {
    templateUrl: 'src/menuapp/templates/categoryComponetn.html',
    bindings: {
      items: '<'
    }
  });


})();
