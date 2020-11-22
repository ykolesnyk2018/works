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
	$('.overlay, .popup-close').click(function() {
		$('.overlay, .popup').hide();
	});
	/* popUp */
	$('.veryHighFrequencyBlockTitle').click(function(){
		$('.veryHighFrequencyBlockTitle').removeClass("active");
		$(this).addClass("active");
	});
	$('.main-slider').slick({
		arrows: false,
		dots: true,
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1
	});
	$('.news-slider').slick({
		arrows: true,
		dots: false,
	    infinite: true,
		rows: 2,
	    slidesToShow: 4,
	    slidesToScroll: 1,
  		speed: 600,
  		variableWidth: true,
		  responsive: [
			{
			  breakpoint: 1130,
			  settings: {
				  slidesToShow: 3,
				  dots: true,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				  slidesToShow: 2,
				  dots: true,
			  }
			}
		  ]
	});
	$('.useful-articles-slider').slick({
		arrows: true,
		dots: false,
	    infinite: true,
	    slidesToShow: 3,
	    slidesToScroll: 1,
  		speed: 600,
  		variableWidth: true,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				  slidesToShow: 2,
				  dots: true
			  }
			}
		]
	});
	$('.variableWidth').slick({
		arrows: true,
		dots: false,
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 1,
  		speed: 600,
  		variableWidth: true,
		  responsive: [
			{
			  breakpoint: 1130,
			  settings: {
				  slidesToShow: 3,
				  dots: true,
			  }
			}
		  ]
	});
	$('.default-slider').slick({
		arrows: true,
		dots: true,
	    infinite: true,
	    slidesToShow: 5,
	    slidesToScroll: 1,
  		speed: 600,
  		variableWidth: true
	});
	$('.up').click( function(){
		var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });
    var spinner = $(".spinner").spinner();
	$('.personal-data-btn, .personal-data-btn2').click(function() {
		$('.personal-data-form').toggleClass("active");
		$('.personal-data-btn').toggleClass("active");
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  focusOnSelect: true,
	  vertical: true,
	  arrows: false,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			arrows: true,
	  		vertical: false,
  			variableWidth: true
		  }
		}
	  ]
	});
	
	
	
	
	
	
	
	
	
	
	
	
	$(function(){
		$(".tabs").tabs();
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
	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			$('header').addClass('shadow');
		}
		else { 
			$('.shadow').removeClass('shadow');
		}
	});
	
	
	$( "#slider-range" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 0,
	      max: 125344,
	      values: [ 12344, 125344 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.values[ 0 ] );
	        $( "#amount_1" ).val( ui.values[ 1 ] );
	      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	// Изменение местоположения ползунка при вводиде данных в первый элемент input
	$("input#amount").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount_1").val();
	  if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#amount").val(value1);
		}
		$("#slider-range").slider("values",0,value1);	
	});
	  
	// Изменение местоположения ползунка при вводиде данных в второй элемент input 	
	$("input#amount_1").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount_1").val();

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#amount_1").val(value2);
		}
		$("#slider-range").slider("values",1,value2);
	});

	// фильтрация ввода в поля
	jQuery('#amount, #amount_1').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;

	});
	
	
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true,
	  variableWidth: true
	});
	 $('.slider-for2').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  fade: true,
	  asNavFor: '.slider-nav2'
	});
	$('.slider-nav2').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for2',
	  dots: false,
	  arrows: false,
	  focusOnSelect: true,
	  variableWidth: true
	});
    $('.slider-nav2').click(function() {
		$('.slider-for2').addClass("active");
		$('.slider-for').removeClass("active");
	}); 
    $('.slider-nav').click(function() {
		$('.slider-for').addClass("active");
		$('.slider-for2').removeClass("active");
	}); 
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".currency-lan-block"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.currency-lan>.toggle').removeClass("active");
			$('.currency-lan-block').removeClass("active");
		}
	}); 
    $('.currency-lan-block button').click(function() {
		$('.currency-lan>.toggle').removeClass("active");
		$('.currency-lan-block').removeClass("active");
	}); 
	
	
	
	
	
	
    $(function() {
		$('.slick-next').hover(function() {
			$('.slick-prev').addClass("no-hover");
		}); 
		$(document).mouseout(function (e){ // событие клика по веб-документу
			var slick_next = $(".slick-next"); // тут указываем ID элемента
			if (!slick_next.is(e.target) // если клик был не по нашему блоку
				&& slick_next.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.slick-prev').removeClass("no-hover");
			}
		}); 
		$('.slick-prev').hover(function() {
			$('.slick-next').addClass("no-hover");
		}); 
		$(document).mouseout(function (e){ // событие клика по веб-документу
			var slick_prev = $(".slick-prev"); // тут указываем ID элемента
			if (!slick_prev.is(e.target) // если клик был не по нашему блоку
				&& slick_prev.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.slick-next').removeClass("no-hover");
			}
		}); 
    });
    $(function() {
		$('.navigation li.next').hover(function() {
			$('.navigation li.prev').addClass("no-hover");
		}); 
		$(document).mouseout(function (e){ // событие клика по веб-документу
			var slick_next = $(".navigation li.next"); // тут указываем ID элемента
			if (!slick_next.is(e.target) // если клик был не по нашему блоку
				&& slick_next.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.navigation li.prev').removeClass("no-hover");
			}
		}); 
		$('.navigation li.prev').hover(function() {
			$('.navigation li.next').addClass("no-hover");
		}); 
		$(document).mouseout(function (e){ // событие клика по веб-документу
			var slick_prev = $(".navigation li.prev"); // тут указываем ID элемента
			if (!slick_prev.is(e.target) // если клик был не по нашему блоку
				&& slick_prev.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.navigation li.next').removeClass("no-hover");
			}
		}); 
    });
    $(function() {
		$('.filter-rating a').hover(function() {
			$('.filter-rating').removeClass("one");
			$('.filter-rating').removeClass("two");
			$('.filter-rating').removeClass("three");
			$('.filter-rating').removeClass("four");
			$('.filter-rating').removeClass("five");
		}); 
		$('.filter-rating a:nth-child(1)').hover(function() {
			$('.filter-rating').addClass("one");
		}); 
		$('.filter-rating a:nth-child(2)').hover(function() {
			$('.filter-rating').addClass("two");
		}); 
		$('.filter-rating a:nth-child(3)').hover(function() {
			$('.filter-rating').addClass("three");
		}); 
		$('.filter-rating a:nth-child(4)').hover(function() {
			$('.filter-rating').addClass("four");
		}); 
		$('.filter-rating a:nth-child(5)').hover(function() {
			$('.filter-rating').addClass("five");
		}); 
		
		$(document).mouseout(function (e){ // событие клика по веб-документу
			var filterHover = $(".filter-rating"); // тут указываем ID элемента
			if (!filterHover.is(e.target) // если клик был не по нашему блоку
				&& filterHover.has(e.target).length === 0) { // и не по его дочерним элементам
				$('.filter-rating').removeClass("one");
				$('.filter-rating').removeClass("two");
				$('.filter-rating').removeClass("three");
				$('.filter-rating').removeClass("four");
				$('.filter-rating').removeClass("five");
			}
		}); 
		$('.filter-rating a').click(function() {
			$('.filter-rating a').removeClass("active");
		}); 
		$('.filter-rating a:nth-child(1)').click(function() {
			$(this).addClass("active");
		}); 
		$('.filter-rating a:nth-child(2)').click(function() {
			$('.filter-rating a:nth-child(1)').addClass("active");
			$(this).addClass("active");
		}); 
		$('.filter-rating a:nth-child(3)').click(function() {
			$('.filter-rating a:nth-child(1)').addClass("active");
			$('.filter-rating a:nth-child(2)').addClass("active");
			$(this).addClass("active");
		}); 
		$('.filter-rating a:nth-child(4)').click(function() {
			$('.filter-rating a:nth-child(1)').addClass("active");
			$('.filter-rating a:nth-child(2)').addClass("active");
			$('.filter-rating a:nth-child(3)').addClass("active");
			$(this).addClass("active");
		}); 
		$('.filter-rating a:nth-child(5)').click(function() {
			$('.filter-rating a:nth-child(1)').addClass("active");
			$('.filter-rating a:nth-child(2)').addClass("active");
			$('.filter-rating a:nth-child(3)').addClass("active");
			$('.filter-rating a:nth-child(4)').addClass("active");
			$(this).addClass("active");
		}); 
    });
	$('.selection a').click(function() {
		$('.selection a').removeClass("active");
		$(this).addClass("active");
	}); 
	$('#row').click(function() {
		$(this).addClass("active");
		$(".category-filter-left a#column").removeClass("active");
		$("#category").addClass("products-row");
	}); 
	$('#column').click(function() {
		$(this).addClass("active");
		$(".category-filter-left a#row").removeClass("active");
		$("#category").removeClass("products-row");
	}); 
	$('.filter-btn').click(function() {
		$('.category .category-left').addClass("active");
		$('.filter-overlay').addClass("active");
		$('body').addClass("fix");
	}); 
	$('.filter-overlay').click(function() {
		$('.category .category-left').removeClass("active");
		$('.filter-overlay').removeClass("active");
		$('body').removeClass("fix");
	}); 
});