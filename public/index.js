var AlleRecipe = angular.module('AlleRecipe',[]);

AlleRecipe.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
    alert("hey");
}]);
//.config(function($routeProvider) {
//  $routeProvider
//   .when('/Book', {
//    templateUrl: 'a.html'
//  })
//  .when('/Books', {
//    templateUrl: 'index.html'
//  });
//});