(function (){
'use strict';

  angular.module('data')
  .service('menuDataService', MenuDataService)

  MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
  return $http({
    method: "GET",
    url: ("https://davids-restaurant.herokuapp.com/categories.json")
  })
};
}

})();
