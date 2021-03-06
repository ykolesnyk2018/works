$(document).ready(function(){
	$(function() {
		$('select.styler').styler();
  	});
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
		$('.overlay_popup').show();
		$('body').addClass("hidden");
		$('.flat-for').slick('setPosition');
		$('.flat-nav').slick('setPosition');
	}); 
	$('.overlay_popup, .close').click(function() {
		$('.overlay_popup, .popup').hide();
		$('body').removeClass("hidden");
	});
	/* popUp */
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
    $('.tab-nav a.filter1').click(function() {
		$('.tab-nav a.filter2').removeClass("active");
		$('.tab-content-right').removeClass("active");
		$('.tab-nav a.filter1').toggleClass("active");
		$('.tab-content-left').toggleClass("active");
	}); 
    $('.tab-nav a.filter2').click(function() {
		$('.tab-nav a.filter1').removeClass("active");
		$('.tab-content-left').removeClass("active");
		$('.tab-nav a.filter2').toggleClass("active");
		$('.tab-content-right').toggleClass("active");
	}); 
    $('.tabs-nav li a').click(function() {
		$('.tabs-nav li a').removeClass("active");
		$('.tabs-content').removeClass("active");
		var tabs_id = $($(this).attr("rel"));
		$(tabs_id).addClass("active");
		$(this).addClass("active");
	}); 
	$('.slider-for').slick({
  	  lazyLoad: 'ondemand',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  asNavFor: '.slider-nav'
	 });
	 $('.slider-nav').slick({
  	  lazyLoad: 'ondemand',
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true,
      variableWidth: true
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
	
	
	$('.images').slick({ // это изначально slick слайдер для основного блока изображений
        slidesToShow: 1,  // по одному слайдеру 
        slidesToScroll: 1, // по одному менять
        arrows:false, // включение стрелок (если не нужны false)
        asNavFor: '.imagesnew_dotted',
  		infinite: false
    });

    $('.imagesnew_dotted').slick({ // настройка навигации
        slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.images', // указываем что это навигация для блока выше
        focusOnSelect: true,
	    variableWidth: true,
		infinite: false
    });
	$('.default-slider').slick({
		arrows: false,
		dots: true,
  	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1
	});
	 $(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			$('header').addClass('motion');
		}
		else { 
			$('header').removeClass('motion');
		}
	});
    $('.up').click( function(){
		var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });
    $('.instagramm').slick({ // настройка навигации
		arrows: true,
        slidesToShow: 3, 
	    variableWidth: true,
		infinite: true,
		  responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
	    		variableWidth: false
			  }
			}
		  ]
    });
	
	$('.flat-for').slick({
	  arrows: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.flat-nav'
	});
	$('.flat-nav').slick({
	  arrows: false,
	  slidesToShow: 11,
	  slidesToScroll: 1,
	  asNavFor: '.flat-for',
	  dots: false,
	  focusOnSelect: true,
  	  variableWidth: true
	});
});