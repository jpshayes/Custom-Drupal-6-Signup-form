$(document).ready(function(){
	$('#signup-data-form, #signup-data-block').validate({
		rules: {
			email: {
				required: true,
				email: true
			}
		},
		errorPlacement: function(error, element) {
				$(element).parent().append(error);
				var w = $(element).width();
				var h = ($(element).parent().outerHeight() * 0.5) - 5;
				$(error).css('left', w);
				$(error).css('top', h);
		}
	});
	$('#signup-data-block .form-submit').click(function(){
		var email = $('#edit-email').val()
		$.cookie('signup', email, { expires: 7, path: '/' });
	});
	var cookie = $.cookie('signup');
	$('#signup-data-form #edit-email').val(cookie)
	
});