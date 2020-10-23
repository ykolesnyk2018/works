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
        $(".main-menu-btn").click(function(){
            $(this).toggleClass("active");
            $('.main-menu').toggleClass("active");
        }); 
    });
    $('.main-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false
    });
    $('.small-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: false,
      variableWidth: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
      		slidesToShow: 1,
      		variableWidth: false
		  }
		}
	  ]
    });
    $('.circles-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
      		slidesToShow: 1,
      		variableWidth: false
		  }
		}
	  ]
    });
	
 	$(function(){
    	$(".tabs").tabs();
 	});
});