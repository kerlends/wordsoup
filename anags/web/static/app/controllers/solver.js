angular.module('wordsoup')
	.controller('SolverController', ['$scope', '$filter', '$timeout', 'SolverService', function($scope, $filter, $timeout, SolverService) {
		$scope.SolverService = SolverService;
		$scope.rack = '';
		$scope.rackClean = function() {
			return $filter('lowercase')($scope.rack);
		};
		$scope.submitRack = function() {
			var temp;
			$timeout.cancel($scope.timeOut);
			$scope.timeOut = $timeout(function() {
				temp = $scope.SolverService.send($scope.rackClean());
				$timeout(function() {
					$scope.results = temp;
				}, 150);
			}, 200);
		};
	}]);
