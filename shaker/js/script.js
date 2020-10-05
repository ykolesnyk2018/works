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
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
  	  adaptiveHeight: true
	});
	$('.slider-nav').slick({
	  arrows: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  vertical: true,
	  verticalSwiping: true,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1169,
			  settings: {
				  vertical: false,
				  verticalSwiping: false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				  slidesToShow: 10,
				  slidesToScroll: 1,
				  infinite: false
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
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