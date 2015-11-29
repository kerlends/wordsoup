angular.module('wordsoup')
.filter('charsonly', function() {
    return function(input) {
        if(input) {
            return input.replace(/[^a-zA-Z]/g, '');
        }
    };
});
