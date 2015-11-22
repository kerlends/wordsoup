var testApp = angular.module('testApp', ['ngResource']);

testApp.filter('orderObjectBy', function() {
	return function(items, field, reverse) {
		var filtered = [];
		angular.forEach(items, function(item) {
			filtered.push(item);
		});
		filtered.sort(function(a, b) {
			return (a[field] > b[field] ? 1: -1);
		});
		if(reverse) filtered.reverse();
		return filtered
	};
});

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
