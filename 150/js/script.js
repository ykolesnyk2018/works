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
	$('.overlay_popup').click(function() {
		$('.overlay_popup, .popup').hide();
	});
	/* popUp */
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $('.main-nenu-btn').click(function() {
		$(this).toggleClass("active");
		$('.main-menu-mob').toggleClass("active");
		$('.overlay').toggleClass("active");
	}); 
	
	
    $('.overlay, .close-menu').click(function() {
		$('.main-nenu-btn').removeClass("active");
		$('.main-menu-mob').removeClass("active");
		$('.overlay').removeClass("active");
	}); 
	
	
    $(function(){
        $(".tabs").tabs();
    });
	$('.one-time').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
	$('.main-slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		dots: true,
		  responsive: [
			{
			  breakpoint: 1150,
			  settings: {
				arrows: false
			  }
			}
		  ]
	});
	$('.individual-slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		dots: true,
		arrows: false
	});
});