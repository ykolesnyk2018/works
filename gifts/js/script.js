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
    $(function(){
        $(".tabs").tabs();
    });
        $('.clients-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-nav',
	  speed: 0,
	  fade: true
    });
    $('.slider-nav').slick({
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
      variableWidth: true
    });
	$('.main-banner-to__right').slick({
	  arrows: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
		soeed: 700,
	  autoplaySpeed: 3000,
	});
    /* toggle */
    $('.toggle').click(function() {
        var toggle_id = $('#' + $(this).attr("data-target"));
        $(this).toggleClass("active");
        $(toggle_id).toggleClass("active");
      }); 
      /* toggle */
	  $(function(){
		  $("#typed").typed({
            strings: ["WILDBERRIES <span>aaaaaaaaa</span>", "OZON <span>aaaaaaaaaaaaaaaa</span>", "Яндек Маркет  <span>aaaaaaaa</span>", "lamoda <span>aaaaaaaaaaaaa</span>", "Aliexpress <span>aaaaaaaaa</span>", "Goods.ru <span>aaaaaaaaaaaa</span>"], // строки выводимые в печать
            typeSpeed: 75, // скорость набора
            backSpeed: 0, // скорость удаления текста
            backDelay: 0, // пауза перед удалением текста
            loop: true, // повтор (true или false)
            loopCount: false, // число повторов, false = бесконечно
            showCursor: true
        });
	  });
	
     new WOW().init();
});