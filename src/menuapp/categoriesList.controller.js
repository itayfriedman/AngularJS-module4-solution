(function (){
'use strict';

  angular.module('MenuApp')
  .controller('categoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var categoriesCtrl = this;
  console.log(this);
  categoriesCtrl.categories = categories
}
console.log("categoriesListController");
})();
