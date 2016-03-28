'use strict';

/**
 * @ngdoc overview
 * @name zclientApp
 * @description
 * # zclientApp
 *
 * Main module of the application.
 */
angular
  .module('zclientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {

    RestangularProvider.setBaseUrl('https://gentle-coast-86971.herokuapp.com');

    $routeProvider

      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'logincntrl',
        controllerAs: 'login'
      })

      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
     
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'movieAdd'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
        controllerAs: 'movieDelete'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        controllerAs: 'movieEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .factory('MovieRestangular', function(Restangular) {
      return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setRestangularFields({
          id: '_id'
        });
      });
    })

  .factory('Movie', function(MovieRestangular) {
      return MovieRestangular.service('movie');
    })

  .directive('youtube', function() {
  return {
    restrict: 'E',
    scope: {
      src: '='
    },
    templateUrl: 'views/youtube.html'
  };
})
.filter('trusted', function ($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
});
