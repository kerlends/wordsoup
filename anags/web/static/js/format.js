(function() {
	String.prototype.format = function() {
		var i = 0;
		var args = arguments;
		return this.replace(/{}/g, function() {
			return typeof args[i] != 'undefined' ? args[i++]: '';
		});
	};
}());
