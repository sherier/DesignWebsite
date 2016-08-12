$(window).load(function() {
	new WOW().init();
});
$(window).scroll(function() {
	if($(document).scrollTop() > 100) {
		$('header').addClass('fixed animated slideInDown');
	} else {
		$('header').removeClass('fixed animated slideInDown');
	}
});