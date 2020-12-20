$(document).ready(function(){
	$(function() {
		$('select').styler();
  	});
	/* Tab */
    $('.tab-nav > div').click(function() {
		$('.tab-content').removeClass("active");
		$('.tab-nav > div').removeClass("active");
		$(this).addClass("active");
		var tabs_id = $('#' + $(this).attr("data-target"));
		$(tabs_id).addClass("active");
	}); 
	$('.overlay_popup').click(function() {
		$('.overlay_popup, .popup').hide();
	});
	/* Tab */
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
	/* toggle */
    $('.toggle').click(function() {
		$(this).toggleClass("active");
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
	}); 
	/* toggle */
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
	$('.liveTrade-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
  	  slidesToShow: 7,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 1223,
		  settings: {
			slidesToShow: 5
		  },
		  breakpoint: 940,
		  settings: {
		  	slidesToShow: 4
		  },
		  breakpoint: 767,
		  settings: {
		  	slidesToShow: 1,
	  		variableWidth: false
		  }
		}
	  ]
	});
	$(function(){
		$("#slider-range-max").slider({
		  range: "max",
		  min: 1,
		  max: 500,
		  value: 236,
		  slide: function( event, ui ) {
			$("#amount").val(ui.value);
		  }
		});
    	$("#amount").val($("#slider-range-max").slider("value"));
  	});
});