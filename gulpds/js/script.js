$(document).ready(function(){
	$(function() {
		$('select').styler();
  	});
	/* toggle */
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(this).toggleClass("active");
		$(toggle_id).toggleClass("active");
	}); 
	/* toggle */
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("data-target"));
		$(popup_id).show();
		$('.overlay').show();
	}); 
	$('.overlay').click(function() {
		$('.overlay, .popup').hide();
	});
	/* popUp */
	$(function(){
		var availableTags = [
		  "Зарядка JD233",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "Зарядка JD233 и аккумулятор",
		  "COBOL",
		  "ColdFusion",
		  "Erlang",
		  "Fortran",
		  "Groovy",
		  "Haskell",
		  "Java",
		  "JavaScript",
		  "Lisp",
		  "Perl",
		  "PHP",
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
		];
		$("#tags").autocomplete({
		  source: availableTags
		});
	 });
    $('.close-autocomplete').click(function() {
		$("#tags").autocomplete("close");
	}); 
	$('.main-slider').slick({
		arrows: true,
		dots: true,
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 720,
			  settings: {
				arrows: false,
  				adaptiveHeight: true
			  }
			}
		  ]
	});
	$('.feedbacks-slider').slick({
	  dots: true,
	  speed: 300,
	  slidesToScroll: 1,
  	  adaptiveHeight: true,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 720,
		  settings: {
			  arrows: false,
	  	      variableWidth: false
		  }
		}
	  ]
	});
	
    if(window.innerWidth < 720){
		$('.tags').slick({
		  arrows: false,
		  dots: false,
		  speed: 300,
		  slidesToScroll: 1,
		  adaptiveHeight: true,
		  variableWidth: true,
  		  focusOnSelect: true
		});
    };
	
	
    $(function() {
        $(".search-btn, .main-menu-btn").click(function(){
            $('body').toggleClass("fix");
        }); 
    });
    $(function() {
        $(".main-menu-btn").click(function(){
            $('header').toggleClass("main-menu-fix");
        }); 
    });
});