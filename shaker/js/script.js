$(document).ready(function(){
	$(function() {
		$('select.styler').styler();
  	});
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
		$('.overlay_popup').show();
	}); 
	$('.overlay_popup, .close').click(function() {
		$('.overlay_popup, .popup').hide();
	});
	/* popUp */
	
	$('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
	$('.main-menu-btn').click(function(){
		$('header').toggleClass("open");
	}); 
    $(function() {
        $(".show-more").click(function(){
            $(this).toggleClass("active");
            $('.articles').toggleClass("articles-more");
        }); 
    });
    $(function(){
        $(".tabs").tabs();
    });
	$('.main-slider').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1
	});
	
	
	$(window).scroll(function () {
		if ($(document).scrollTop() > 100) {
			$('.main-menu').addClass('fixed');
		}
		else { 
			$('.fixed').removeClass('fixed');
		}
	});
});