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
      adaptiveHeight: true
    });
    $('.news-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    });
});