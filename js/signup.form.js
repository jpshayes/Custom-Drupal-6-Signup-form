$(document).ready(function(){
	$('#signup-data-form, #signup-data-block').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			zip_code: {
				required: true,
				digits: true,
				minlength: 5
			}
		},
		messages: {
			first: {
				required: 'Please enter your first name.'
			},
			last: {
				required: 'Please enter your last name.'
			},
			title: {
				required: 'Please enter your job title.'
			},
			employer: {
				required: 'Please enter your employer.'
			}
		},
		errorPlacement: function(error, element) {
				$(element).parent().append(error);
				var w = $(element).width() + 10;
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