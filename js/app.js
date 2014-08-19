var app = angular.module('app', ['ngRoute']);

app.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: 'views/home.html'
  });
});
