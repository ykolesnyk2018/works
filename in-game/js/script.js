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
    $('.howItWork-ex-button a').click(function() {
		$(".howItWork").removeClass().addClass('howItWork');
		$('.howItWork-ex-button a').removeClass("active");
		$(this).addClass("active");
		var sa_id = $(this).attr("data-target");
		$('.howItWork').addClass(sa_id);
	}); 
	$('.autoplay-slider').slick({
		arrows: false,
		dots: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	});
	
	
	
	$('.specSlider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1
	});
    $(function(){
        $(".tabs").tabs();
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
	  autoplay: true,
	  autoplaySpeed: 10000,
      slidesToScroll: 2,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 1223,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
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
	$(function(){
		$("#slider-range-max2").slider({
		  range: "max",
		  min: 1,
		  max: 700,
		  value: 360,
		  slide: function( event, ui ) {
			$("#amount2").val(ui.value);
		  }
		});
    	$("#amount2").val($("#slider-range-max2").slider("value"));
  	});
	/* toggle */
    $('.copy').click(function() {
		var copyText = $('#' + $(this).attr("data-target"));
	  copyText.select();
	  document.execCommand("copy");
	});
    $('.object').click(function() {
		$(".object").removeClass('active');
		$(this).addClass('active');
	});
	/* toggle */
    $('.objectsNav a').click(function() {
		$(".objects").removeClass().addClass('objects');
		$(".keysBottom").removeClass().addClass('keysBottom');
		$(".objectsNav a").removeClass();
		$(this).toggleClass("active");
		var objectsNav = $(this).attr("data-target");
		$(".objects, .keysBottom").addClass(objectsNav);
	}); 
	$(function() {
	  var $aud = $("#audio"),
		  $pp  = $('#playpause'),
		  $vol = $('#volume'),
		  $bar = $("#progressbar"),
		  AUDIO= $aud[0];

	  AUDIO.volume = 0.75;
	  AUDIO.addEventListener("timeupdate", progress, false);

	  function getTime(t) {
		var m=~~(t/60), s=~~(t % 60);
		return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
	  }
	  function progress() {
		$bar.slider('value', ~~(100/AUDIO.duration*AUDIO.currentTime));
		//$pp.text(getTime(AUDIO.currentTime));
		$(".player-time").text(getTime(AUDIO.currentTime));
	  }

	  $vol.slider( {
		value : AUDIO.volume*100,
		slide : function(ev, ui) {
		  $vol.css({background:"hsla(180,"+ui.value+"%,50%,1)"});
		  AUDIO.volume = ui.value/100; 
		} 
	  });

	  $bar.slider( {
		  orientation: "horizontal",
		  range: "min",
		  animate: true,
		value : AUDIO.currentTime,
		slide : function(ev, ui) {
		  AUDIO.currentTime = AUDIO.duration/100*ui.value;
		}
	  });
	  $pp.click(function() {
		return AUDIO[AUDIO.paused?'play':'pause']();
	  });

	});
});