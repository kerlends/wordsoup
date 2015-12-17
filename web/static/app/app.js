angular.module('wordsoup', ['ngResource', 'ngRoute'])
	.config(['$routeProvider', '$resourceProvider', '$locationProvider', 'STATIC_URL', function($routeProvider, $resourceProvider, $locationProvider, STATIC_URL) {
		var toStatic = function(i) {
			return '{}{}'.format(STATIC_URL, i);
		};
		$resourceProvider.defaults.stripTrailingSlashes = false;

		$routeProvider
			.when('/', {
				templateUrl: toStatic('app/views/solver.html'),
				controller: 'SolverController',
				controllerAs: 'solverCtrl',
			});

		$locationProvider.html5Mode(true);
	}]);
