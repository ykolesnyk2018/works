$(document).ready(function(){
	$(function() {
		$('select').styler();
  	});
	$('.ourCars-slider').slick({
	  dots: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  variableWidth: true,
	  rows: 1,
	  responsive: [
		{
		  breakpoint: 939,
		  settings: {
	  		slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
	  		slidesToShow: 2,
	  		slidesToScroll: 2
		  }
		}
	  ]
	});
	$('.products-slider').slick({
	  dots: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  variableWidth: true,
	  rows: 1,
	  responsive: [
		{
		  breakpoint: 939,
		  settings: {
	  		slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
	  		slidesToShow: 1,
	  		variableWidth: false
		  }
		}
		  
	  ]
	});
	$('.friends').slick({
	  dots: false,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 939,
		  settings: {
	  		slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
	  		slidesToShow: 3,
	  		slidesToScroll: 3
		  }
		}
	  ]
	});
	$('.feedbacks-slider').slick({
	  arrows: false,
	  dots: true,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	});
	$('.main-slider').slick({
	  arrows: true,
	  dots: true,
	  speed: 800,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		customPaging: function (slider, i) {
			//FYI just have a look at the object to find available information
			//press f12 to access the console in most browsers
			//you could also debug or look in the source
			console.log(slider);
			return  (i + 1) + ' of ' + slider.slideCount;
		}
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
		  '<a href="/ru/product/33045881171/" id="ui-id-67" tabindex="-1" class="ui-menu-item-wrapper"><img width="50px" height="50px" src="https://ae01.alicdn.com/kf/HTB155v0dW5s3KVjSZFNq6AD3FXav/Аксессуары-для-автомобильных-фар-kia-sportage-удлисветодиодный-Тель-для-светодиодной-лампы-пылезащитный-колпачок-крышка-для-лампы.jpg_350x350.jpg"><span>Аксессуары для автомобильных фар kia sportage, удлисветодиодный Тель для светодиодной лампы, пылезащитный колпачок, крышка для лампы Y1026J, Y1010Y, 1 ш...</span></a>',
		  "Python",
		  "Ruby",
		  "Scala",
		  "Scheme"
		];
		$("#tags").autocomplete({
		  source: availableTags
		});
	 });
    $('#tags').click(function() {
		$(".close-autocomplete").addClass('active');
		$(".search-bg").addClass('active');
		$(".search-form").addClass('active');
	}); 
    $('.close-autocomplete, .search-bg').click(function() {
		$(".search-bg").removeClass("active");
		$("#tags").autocomplete("close");
		$("#tags").val('');
		$(this).removeClass('active');
		$(".search-form").removeClass('active');
		$(".close-autocomplete").removeClass('active');
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
	$(function(){
		$(".tabs").tabs();
	});
    if(window.innerWidth < 720){
        $(".show_popup").click(function(){
            $('body').addClass("fix");
        }); 
        $(".popup-close").click(function(){
            $('body').removeClass("fix");
        }); 
        $(".search-form form .close-autocomplete").click(function(){
            $('.search-form').addClass("active");
        }); 
    };
	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			$('header').addClass('shadow');
		}
		else { 
			$('.shadow').removeClass('shadow');
		}
	});
	
	
    $(function() {
        $(".search-btn, .main-menu-btn, .filter-btn, .filter-btn2").click(function(){
            $('body').toggleClass("fix");
        }); 
    });
    $(function() {
        $(".main-menu-btn").click(function(){
            $('header').toggleClass("main-menu-fix");
        }); 
    });
	$( "#slider-range" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 0,
	      max: 35340,
	      values: [ 0, 4000 ],
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
		$(this).toggleClass("reverse");
	}); 
	$('.filter-search>ul>li>a').click(function() {
		$('.filter-search>ul>li>a').removeClass("active");
		$(this).addClass("active");
		$('.filter-search-dropdown').removeClass("active");
		var mf_id = $('#' + $(this).attr("data-target"));
		$(mf_id).toggleClass("active");
	}); 
	$('.main-menu-dropdown-close').click(function() {
		$('.main-menu > ul > li > a.active').removeClass("active");
		$('.filter-search>ul>li>a').removeClass("active");
		$('.filter-search-dropdown').removeClass("active");
	}); 
	$('.filter-search-dropdown-close').click(function() {
		$('.filter-search>ul>li>a').removeClass("active");
	}); 
	$('.mobil-drop-down-menu>ul>li>.more').click(function() {
		$(this).addClass("active");
		$('.back').addClass("active");
		$('.back-menu').addClass("active");
		$('.mobil-drop-down-menu').addClass("open");
	}); 
	$('.back-menu').click(function() {
		$('.mobil-drop-down-menu>ul>li>.more').removeClass("active");
		$('.back').removeClass("active");
		$('.back-menu').removeClass("active");
		$('.mobil-drop-down-menu').removeClass("open");
	}); 
	$('.back').click(function() {
		$('.mobil-drop-down-menu').removeClass("active");
	}); 
});