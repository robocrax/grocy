﻿$('#username').focus();

$('.content-wrapper').css('transition', 'margin-left .4s');
$('.content-wrapper').css('margin-left', 0);

if (GetUriParam('invalid') === 'true')
{
	$('#login-error').text(__t('Invalid credentials, please try again'));
	$('#login-error').removeClass('d-none');
}
