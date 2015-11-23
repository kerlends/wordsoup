angular.module('wordsoup')
	.controller('SolverController', ['$scope', '$filter', '$timeout', '$log', 'SolverService', function($scope, $filter, $timeout, $log, SolverService) {
		var temp;
		$scope.rack = '';

		$scope.rackClean = function() {
			return $filter('lowercase')($scope.rack);
		};

		$scope.formEmpty = function() {
			return ($scope.rack.length > 0);
		};

		$scope.resetForm = function() {
			$scope.rack = '';
			$scope.submit();
		}

		$scope.submit = function() {
			$timeout.cancel($scope.timeOut);
			if($scope.rack.length > 0) {
				$scope.timeOut = $timeout(function() {
					$scope.data = SolverService.solve($scope.rackClean());
					$scope.data.$promise.then(function(data) {
						$scope.results = data;
					});
				}, 350);
			};
		};
	}]);
