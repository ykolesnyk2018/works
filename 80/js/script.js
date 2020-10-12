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
    $('.slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.manufacturers-slider').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1140,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
  			adaptiveHeight: true
		  }
		}
	  ]
    });
    $('.news-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
  			adaptiveHeight: true,
      		variableWidth: false
		  }
		}
	  ]
    });
});