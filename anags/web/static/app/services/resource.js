angular.module('wordsoup')
	.factory('SolverService', ['$resource', 'API_URL', function($resource, API_URL) {
		var api = $resource('{}:rack'.format(API_URL));
		return {
            solve: function(myRack, limit) {
                return api.save({rack: myRack, limit: limit});
            }
		};
	}]);
