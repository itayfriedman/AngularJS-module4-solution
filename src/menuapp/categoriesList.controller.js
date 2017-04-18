(function (){
'use strict';

  angular.module('MenuApp')
  .controller('categoriesListController', CategoriesListController);

  CategoriesListController.$inject = ['categories'];
function CategoriesListController(categories) {
  var categoriesList = this;
console.log(categoriesList);
  categoriesList.items = [];
   categoriesList.$onInit = function functionName() {
      MenuDataService.getAllCategories()
      .then(function (result) {
console.log("controller ", categories);
        categoriesList.items = result
      });
   };
}
console.log("categoriesListController");
})();
