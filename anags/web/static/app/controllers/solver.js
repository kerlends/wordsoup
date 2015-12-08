angular.module('wordsoup')
	.controller('SolverController', ['$scope', '$filter', '$timeout', '$log', 'SolverService', function($scope, $filter, $timeout, $log, SolverService) {
        $scope.count = 0;
        $scope.passCount = 0;

		$scope.rack = '';
        $scope.limitBy = 24;

		$scope.rackLower = function() {
			return $filter('lowercase')($scope.rack);
		};

        $scope.rackClean = function() {
            return $filter('charsonly')($scope.rackLower());
        };

		$scope.formEmpty = function() {
			return ($scope.rack.length > 0);
		};

		$scope.resetForm = function() {
			$scope.rack = '';
			$scope.submit();
		}

		$scope.submit = function() {
            if($scope.timeOut) {
                $timeout.cancel($scope.timeOut);
            };

			if($scope.rack.length > 0) {

				$scope.timeOut = $timeout(function() {
                    $scope.data = SolverService.solve($scope.rackClean(), $scope.limitBy);
					$scope.data.$promise.then(function(data) {
						$scope.results = data.solved;
					});
                }, 350);
			};
		};

		$scope.wordSelect = function(word) {
			$scope.data = SolverService.refresh($scope.rackClean(), word);
			$scope.data.$promise.then(function(data) {
				$scope.results = data.solved;
				$scope.rack = data.rack;
			});
		};

	}]);
