angular.module('wordsoup')
.filter('spaceless', function() {
    return function(input) {
        if(input) {
            return input.replace(/\s+/g, '')
                        .replace(/\./g, '')
                        .replace(/,/g, '');
        }
    };
});
