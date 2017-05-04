(function (){
'use strict';

  angular.module('MenuApp')
  .controller('itemsControlle', ItemsController);

  ItemsController.$inject = ['items'];
function ItemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;

}

})();
