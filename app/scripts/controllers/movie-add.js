'use strict';

/**
 * @ngdoc function
 * @name zclientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the zclientApp
 */
angular.module('zclientApp')
  .controller('MovieAddCtrl', function ($scope, Movie, $location) {
	  $scope.movie = {};
	  $scope.saveMovie = function() {
	    Movie.post($scope.movie).then(function() {
	      $location.path('/movies');
	    });
	  };
});