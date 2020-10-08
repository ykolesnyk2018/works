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
	$('.overlay_popup, .close').click(function() {
		$('.overlay_popup, .popup').hide();
	});
	/* popUp */
	
	$('.choose-city-nav li a').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$('.choose-city-nav li a').removeClass('active');
		$('.choose-city-content').removeClass('active');
		$(toggle_id).addClass("active");
		$(this).addClass("active");
	}); 
	
	$('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
	$('.main-menu-btn').click(function(){
		$('header').toggleClass("open");
	}); 
    $(function() {
        $(".show-more").click(function(){
            $(this).toggleClass("active");
            $('.articles').toggleClass("articles-more");
        }); 
    });
    $(function() {
        $(".btn-show").click(function(){
            $(this).toggleClass("active");
            $('.works').toggleClass("active");
        }); 
    });
    $(function(){
        $(".tabs").tabs();
    });
	$('.main-slider').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
  	  adaptiveHeight: true
	});
	$('.slider-nav').slick({
	  arrows: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  vertical: true,
	  verticalSwiping: true,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1169,
			  settings: {
				  vertical: false,
				  verticalSwiping: false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				  slidesToShow: 10,
				  slidesToScroll: 1,
				  infinite: false
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	});
	
	
	$('.product-inside-slider').slick({
	  arrows: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  asNavFor: '.product-inside-nav',
  	  adaptiveHeight: true,
	  dots: true,
		dotsClass: 'custom_paging',
		customPaging: function (slider, i) {
			//FYI just have a look at the object to find available information
			//press f12 to access the console in most browsers
			//you could also debug or look in the source
			console.log(slider);
			var slideNumber   = (i + 1),
				totalSlides = slider.slideCount;
			return '<a class="custom-dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string"> ' + slideNumber + ' / ' + totalSlides + '</span></a>';
		}
	});
	$('.product-inside-nav').slick({
	  arrows: true,
	  slidesToShow: 6,
	  slidesToScroll: 1,
  	  focusOnSelect: true,
	  vertical: true,
	  verticalSwiping: true,
	  asNavFor: '.product-inside-slider',
	  dots: false,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
	  			  slidesToShow: 3,
	  			  slidesToScroll: 1,
				  vertical: false,
				  verticalSwiping: false
			  }
			}
		  ]
	});
    if(window.innerWidth < 767){
		$('.works').slick({
			arrows: false,
		  dots: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 1,
		  variableWidth: true,
  		  focusOnSelect: true
		});
    };
});