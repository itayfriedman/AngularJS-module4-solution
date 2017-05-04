(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'categoriesController as categoriesCtrl',
    resolve: {
      categories: ['menuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories().then(function(response) {
          return response.data;
          });
        }]
      }
    })

    .state('items', {
         url: '/items/{category}',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: 'itemsController as itemsCtrl',
      resolve: {
          items: ['menuDataService', '$stateParams', function(MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category).then(function(response) {
          return response.data.menu_items;
        });
      }]
        }
    })


}
})();
