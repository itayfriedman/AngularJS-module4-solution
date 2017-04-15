(function (){
'use strict';

  angular.module('MenuApp')
  .controller('categoriesListController', CategoriesListController);

  CategoriesListController.$inject = ['MenuDataService'];
function CategoriesListController(MenuDataService) {
  var mainList = this;
  mainList.items = [];
   mainList.$onInit = function functionName() {
      MenuDataService.getAllCategories()
      .then(function (result) {
        mainList.items = result
      });
   };
}

})();
