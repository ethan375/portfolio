// console.log("these are connected!");
const app = angular.module('portfolio', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/skills', {
    templateUrl: './views/skills.html'
  }).when('/projects', {
    templateUrl: './views/projects.html'
  }).when('/contact', {
    templateUrl:'./views/contact.html'
  }).otherwise({
    templateUrl: './views/about.html'
  })
}]);