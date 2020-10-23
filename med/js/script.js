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
		$(toggle_id).toggleClass('active');
		$(this).toggleClass('active');
	}); 
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $(function(){
        $(".tabs").tabs();
    });
	$('.main-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			  dots: false
		  }
		}
	  ]
	});
	$('.news-slider').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  speed: 300,
  	  slidesToScroll: 3,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
  	  		slidesToScroll: 1
		  }
		}
	  ]
	});
	$('.gallery-slider').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  speed: 300,
	  slidesToShow: 3,
  	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 940,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
  			variableWidth: true
		  }
		}
	  ]
	});
});