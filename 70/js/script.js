$(document).ready(function(){
	$(function() {
		$('select.styler').styler();
  	});
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(this).toggleClass("active");
		$(toggle_id).toggleClass("active");
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
    $(function(){
        $(".tabs").tabs();
    });
	
    $('.anchor').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
            
            document.getElementById('form').innerHTML='<div class="all-ok">Спасибо за сообщение мы свяжемся с вами в течении 5 минут!</div>'; // Див сам создай с таким же id
			
            $("#form").trigger("reset");
		});
		return false;
	});
	
	
	$('.about-us-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
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
	
	$('.mainSlider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
	
	$('.our-par-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  variableWidth: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
			{
			  breakpoint: 940,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth: false
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false
			  }
			},
		]
	});
    $('.our-works-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
      variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1170,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
              }
            },
        ]
	});
});