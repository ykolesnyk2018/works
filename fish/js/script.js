$(document).ready(function(){
	$(function() {
		$('select').styler();
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
		$(this).toggleClass('active');
		$(toggle_id).toggleClass('active');
	}); 
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
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
	  dots: false,
	  infinite: false,
	  speed: 700,
	  slidesToShow: 1,
  	  adaptiveHeight: true,
	  slidesToScroll: 1
	});
	$('.follow-slider').slick({
	  arrows: false,
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
  	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 979,
		  settings: {
	  		slidesToShow: 3,
		  }
		}
	  ]
	});
	$('.products-slider').slick({
	  dots: false,
	  infinite: false,
	  speed: 600,
	  slidesToShow: 3,
	  slidesToScroll: 1,
  	  variableWidth: true,
  	  adaptiveHeight: true,
	  responsive: [
		{
		  breakpoint: 979,
		  settings: {
	  		slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
	  		slidesToShow: 1,
  	  	    adaptiveHeight: true,
		  }
		}
	  ]
	});
});