angular.module('wordsoup')
	.controller('SolverController', ['$scope', '$filter', '$timeout', 'SolverService', function($scope, $filter, $timeout, SolverService) {
        var ci, ix;
		$scope.rack = '';
        $scope.chosen = [];
        $scope.limitBy = 24;
        $scope.scrabbleMode = false;

		$scope.rackLower = function() {
			return $filter('lowercase')($scope.rack);
		};

        $scope.rackClean = function() {
            return $filter('charsonly')($scope.rackLower());
        };

		$scope.formEmpty = function() {
			return ($scope.rack.length > 0) || ($scope.chosen.length > 0);
		};

		$scope.resetForm = function() {
			$scope.rack = '';
            $scope.results = {};
		}

        $scope.resetChosen = function() {
            $scope.chosen = [];
        }

		$scope.submit = function() {
            $scope.rack = $scope.rackClean();

            if($scope.timeOut) {
                $timeout.cancel($scope.timeOut);
            };

			if($scope.rack.length > 0) {
				$scope.timeOut = $timeout(function() {
                    $scope.data = SolverService.solve($scope.rackClean(), $scope.limitBy);
					$scope.data.$promise.then(function(data) {
						$scope.results = data.solved;
					});
                }, 260);
            }
            else $scope.results = {};
		};

		$scope.wordSelect = function(word) {
            $scope.chosen.push(word);
            for(ix=0; ix<word[0].length; ix++) {
                if($scope.rack.indexOf(word[0][ix]) > -1) {
                    $scope.rack = $scope.rack.replace(word[0][ix], '');
                }
            }
            if($scope.rack.length > 0) $scope.submit();
            else $scope.results = {};
		};

        $scope.delWord = function(word) {
            ci = $scope.chosen.indexOf(word);
            $scope.chosen.splice(ci, 1);
            $scope.rack += word[0];
            $scope.submit();
        };
	}]);
