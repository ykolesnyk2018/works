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
      variableWidth: true
    });
    $('.circles-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: true
    });
});