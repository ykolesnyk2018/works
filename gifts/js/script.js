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
	  speed: 1500,
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
	  fade: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
  		pauseOnHover:false
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
            strings: ["WILDBERRIES <span>aaaaaaaaa</span>", "OZON <span>aaaaaaaaaaaaaaaa</span>", "Яндек Маркет  <span>aaaaaaaa</span>", "Lamoda <span>aaaaaaaaaaaaa</span>", "Aliexpress <span>aaaaaaaaa</span>", "Goods <span>aaaaaaaaaaaaaaa</span>"], // строки выводимые в печать
            typeSpeed: 75, // скорость набора
            backSpeed: 0, // скорость удаления текста
            backDelay: 0, // пауза перед удалением текста
            loop: true, // повтор (true или false)
            loopCount: false, // число повторов, false = бесконечно
            showCursor: true
        });
	  });
	!function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);
	
	$('.figures-block span b, .figures-right-block span b').spincrement({
		thousandSeparator: "",
		duration: 2000
	});
	
    $(".slider-nav .slick-slide").click(function(){
		$('.figures-block span b, .figures-right-block span b').spincrement({
			thousandSeparator: "",
			duration: 2000
		});
     }); 
     new WOW().init();
    $('.header-right nav ul li a, .mobil-menu ul li a').click( function(){
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
		$(".main-menu-btn").removeClass("active");
		$(".mobil-menu").removeClass("active");
	    return false;
    });
});