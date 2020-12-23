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
	/* Tab */
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("data-target"));
		$(popup_id).addClass("active");
		$('.overlay').addClass("active");
		$('body').addClass("hidden");
	}); 
	$('.overlay, .popup-close').click(function() {
		$('.overlay, .popup').removeClass("active");
		$('body').removeClass("hidden");
	});
	/* popUp */
	/* toggle */
    $('.toggle').click(function() {
		$(this).toggleClass("active");
		var toggle_id = $('#' + $(this).attr("data-target"));
		$(toggle_id).toggleClass("active");
	}); 
	/* toggle */
	// обработчик нажатия на кнопку плей
	$('.player button').click(function () {
		var parent = $(this).parent();

		var button = $(this);
		var audio = $('audio', parent)[0];
		var duration = $('.player-example-duration', parent);

		// переключение состояния плеера и смена картинки на кнопке - плей или пауза
		if (audio.paused == false) {
			audio.pause();
			button.css('background', 'url(/images/play.png)');
		} else {
			audio.play();
			button.css('background', 'url(/images/pause.png)');
		}

		// по окончанию трека на кнопку устанавливается картинка плей
		$(audio).on('ended', function() {
			button.css('background', 'url(/images/play.png)');
		});

		// обновление текущей позиции воспроизведения
		$(audio).on('timeupdate', function() {
			var date = new Date(audio.currentTime * 1000);
			duration.html(date.getMinutes()+':'+date.getSeconds());
		});
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
	$('.favorites-slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 300,
  	  slidesToShow: 2,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 1223,
		  settings: {
			slidesToShow: 2
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