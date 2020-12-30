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
	/* toggle */
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
	/* toggle */
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $(function() {
        $(".accordion-top").click(function(){
            $(this).toggleClass("active");
        }); 
    });
	$(function(){
		$(".tabs").tabs();
	});
	
	
	$('.cardSlider-for').slick({
  	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.cardSlider-nav',
	  arrows: false
	});
	$('.cardSlider-nav').slick({
  	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  rows: 2,
  	  variableWidth: true,
	  asNavFor: '.cardSlider-for',
	  dots: false,
	  focusOnSelect: true,
	  arrows: false,
	  responsive: [
		{
		  breakpoint: 940,
		  settings: {
			slidesToShow: 5
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 413,
		  settings: {
			slidesToShow: 3
		  }
		}
	  ]
	});
	
	
	
	
	
	$(".spinner").spinner();
    $('.go-to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});