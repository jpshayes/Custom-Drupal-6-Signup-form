$(document).ready(function(){
	$('#signup-data-form, #signup-data-block').validate();
	$('#signup-data-block .form-submit').click(function(){
		var email = $('#edit-email').val()
		$.cookie('signup', email, { expires: 7, path: '/' });
	});
	var cookie = $.cookie('signup');
	$('#signup-data-form #edit-email').val(cookie)
	
});