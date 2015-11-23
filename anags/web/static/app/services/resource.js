angular.module('wordsoup')
	.factory('SolverService', ['$resource', 'API_URL', function($resource, API_URL) {
		var api = $resource('{}:rack'.format(API_URL));
		var SolverService = {
			send: function(myRack) {
				return api.get({rack: myRack});
			}
		};

		return SolverService;
	}]);
