$(window).load(function() {
	$(".loader").delay(1000).fadeOut();
	$("#mask").delay(1000).fadeOut("slow");
	new WOW().init();
});
$(function() {
	$('.header').onePageNav();
});

$(window).scroll(function() {
	if($(document).scrollTop() > 100) {
		$('header').addClass('fixed animated slideInDown');
		$('header').css("color", "#000");
		$('header a').css("color", "#000");
	} else {
		$('header').removeClass('fixed animated slideInDown');
		$('header').css("color", "#fff");
		$('header a').css("color", "#fff");
	}
});
//轮播图
$(".fullSlide").hover(function() {
		$(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
	},
	function() {
		$(this).find(".prev,.next").fadeOut()
	});
$(".fullSlide").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	effect: "fold",
	autoPlay: true,
	autoPage: true,
	trigger: "click",
	startFun: function(i) {
		var curLi = jQuery(".fullSlide .bd li").eq(i);
		if(!!curLi.attr("_src")) {
			curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
		}
	}
});
//$(document).ready(function(e) {
//  $('#b02').unslider();
//});

$(".search").click(function() {
	$(".search").hide();
	$(".search_list").show();
});
$(".search_list").click(function() {
	//$(".search").addClass("animated lightSpeedIn");
	$(".search").show();
	$(".search_list").hide();
});

var scene = document.getElementById('strengths');
var scene1 = document.getElementById('project');
var parallax = new Parallax(scene);
var parallax = new Parallax(scene1);

$('#d_tab29').DB_rotateRollingBanner({
	key: "c37080",
	moveSpeed: 200,
	autoRollingTime: 2000
})

$('.lazy').slick({
	lazyLoad: 'ondemand',
	slidesToShow: 3,
	slidesToScroll: 1
});
$('.autoplay').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	//autoplaySpeed: 2000,
});
$('.play-btn').click(function() {
	$(this).hide();
	$('.video-titel').show();
});