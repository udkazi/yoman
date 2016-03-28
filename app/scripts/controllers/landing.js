'use strict';

/**
 * @ngdoc function
 * @name zclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zclientApp
 */
angular.module('zclientApp')
  .controller('logincntrl', function ($scope, $location, $rootScope) {



  	$scope.submitAuth = function(){


  		if($scope.Username=='sqr' && $scope.Password=='12345') {
        $rootScope.loggedin = true;
  	   	$location.path('/main');
  	  }

  	  else{
  	  	alert('Enter valid username and Password')
  	  }
  	}
   	
  });
