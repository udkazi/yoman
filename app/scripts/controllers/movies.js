'use strict';

/**
 * @ngdoc function
 * @name zclientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the zclientApp
 */
angular.module('zclientApp')
.controller('MoviesCtrl', function ($scope, Movie) {
  $scope.movieslist = Movie.getList().$object;
});
