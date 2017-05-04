(function (){
'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/itemComponetn.html',
    bindings: {
      items: '<'
    }
  });


})();
