$(document).ready(function () {
	
	//button
	$('.btn_menu').click(function(event) {
		$('menu').toggleClass('width');
		$("main").toggleClass('width');
	});
	
	$('.btn_member').click(function(event) {
		$("header .ul_flex").toggle();
		$(".btn_member").toggleClass('btn_hover');
	});
	$('main, menu').click(function(event) {
		$("header .ul_flex").hide();
		$(".btn_member").removeClass('btn_hover');
	})
	
	//menu
	$('.btn_onoff').click(function(event) {
		$(this).toggleClass('fa-chevron-down');
		$(this).toggleClass('fa-chevron-right');
		$(this).parent().find(".menu_onoff").toggleClass('onoff');
	})
  
    //mask
	$('.btn_plus').click(function(event) {
		$('.mask, .popup_b').show();
	});
	$('.mask').click(function(event) {
		$(".mask, .popup_b").hide();
	})
	$('.btn_check').click(function(event) {
		$('.mask2, .popup_check').show();
	});
	$('.mask2, .btn_close').click(function(event) {
		$(".mask2, .popup_check").hide();
	})
	$('.a_dot').click(function(event) {
		$('.mask3, .popup_dot').show();
	});
	$('.btn_slong').click(function(event) {
		$('.mask3, .popup_slong').show();
	});
	$('.mask3, .btn_close2').click(function(event) {
		$(".mask3, .popup_s").hide();
	})
	
})