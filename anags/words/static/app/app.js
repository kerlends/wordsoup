var wordsoup = angular.module('wordsoup', ['ngResource']);

wordsoup.factory('Solver', function($resource) {
	return $resource('/api/:rack', {rack: "@rack"});
});

wordsoup.controller('SolverShowCtrl', function($scope, Solver) {
	Solver.get({id: })
}
