'use strict';

/**
 * @ngdoc function
 * @name zclientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the zclientApp
 */
angular.module('zclientApp')
 .controller('MovieViewCtrl', function (
  $scope,
  $routeParams,
  Movie
) {
  $scope.viewMovie = true;
  $scope.movie = Movie.one($routeParams.id).get().$object;
});