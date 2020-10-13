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
	$('.main-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
	$('.news-slider').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  speed: 300,
  	  slidesToScroll: 3,
	  variableWidth: true
	});
	$('.gallery-slider').slick({
	  infinite: true,
	  arrows: false,
	  dots: true,
	  speed: 300,
	  slidesToShow: 3,
  	  slidesToScroll: 1
	});
});