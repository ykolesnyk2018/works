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
<<<<<<< HEAD
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
=======
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass('active');
		$(this).toggleClass('active');
	}); 
    $(function() {
        $(".main-menu-btn").click(function(){
            $('.main-menu').toggleClass("active");
>>>>>>> 46f43f61b133288c052a91551c7ab3093a57795f
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
<<<<<<< HEAD
      variableWidth: true
=======
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
>>>>>>> 46f43f61b133288c052a91551c7ab3093a57795f
    });
    $('.circles-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
<<<<<<< HEAD
      variableWidth: true
=======
		centerMode: false,
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
    
    $('.product-slide-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.products-slides-small'
    });
    $('.products-slides-small').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.product-slide-big',
      dots: false,
      arrows: false,
      focusOnSelect: true,
        variableWidth: true
>>>>>>> 46f43f61b133288c052a91551c7ab3093a57795f
    });
});