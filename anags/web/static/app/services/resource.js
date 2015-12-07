angular.module('wordsoup')
	.factory('SolverService', ['$resource', 'API_URL', 'REF_URL', function($resource, API_URL, REF_URL) {
		var api = $resource('{}:rack'.format(API_URL));
		return {
			solve: function(myRack) {
				return api.save({rack: myRack});
			},
            solveWithLimit: function(myRack, limit) {
                return api.save({rack: myRack, limit: limit});
            },
			refresh: function(myRack, myWord) {
				return api.save({rack: myRack, word: myWord});
			}
		};
	}]);
