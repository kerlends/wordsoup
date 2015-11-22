var testApp = angular.module('testApp', ['ngResource']);

testApp.factory('SolverService', function($resource) {
	var api = $resource('/api/:rack/');
	var SolverService = {
		send: function(myRack) {
			return api.get({rack: myRack});
		}
	};

	return SolverService;
});

testApp.controller('mainController', function($scope, SolverService) {
	$scope.SolverService = SolverService;
	$scope.rack = 'anagrams';
	$scope.submitRack = function() {
		$scope.results = $scope.SolverService.send($scope.rack);
	};

});
