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
    $('.toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
		$(this).toggleClass("active");
	}); 
    $('.close-toggle').click(function() {
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).removeClass("active");
	}); 
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $('.slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.manufacturers-slider').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1140,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
    });
    $('.news-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
	  responsive: [
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
  			adaptiveHeight: true,
      		variableWidth: false
		  }
		}
	  ]
    });
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".location-content"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("active"); // скрываем его
			$('.location').removeClass("active");
		}
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".header-bottom-menu"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.removeClass("active"); // скрываем его
			$('.top-menu-btn').removeClass("active");
		}
	});
});