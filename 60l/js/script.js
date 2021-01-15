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
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $(function(){
        $(".tabs").tabs();
    });
        $('.clients-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
      variableWidth: true
    });

    /* toggle */
    $('.toggle').click(function() {
        var toggle_id = $('#' + $(this).attr("data-target"));
        $(this).toggleClass("active");
        $(toggle_id).toggleClass("active");
      }); 
      /* toggle */
});