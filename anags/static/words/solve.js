$('#sendrack').on('click', function() {
	$.ajax({
		url: '/solve/' + $('#id_rack').val(),
		type: 'GET',
		success: function(data) {
			console.log(data);
		},
		error: function(e) {
			console.log(e);
		}
	});
});
