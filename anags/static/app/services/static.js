angular.module('wordsoup')
.factory('toStatic', ['STATIC_URL', function(STATIC_URL) {
	return function(i) {
		return '{}{}'.format(STATIC_URL, i);
	};
}]);
