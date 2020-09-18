$(document).ready(function(){
    
    $('.go-to, .make-call').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
    $('.action-slider').slick({
      infinite: false,
      arrows: false,
      slidesToScroll: 1,
      variableWidth: true,
      focusOnSelect: true
    });
    
    /*$('.main-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots:true
    });*/
    var $slider = $('.main-slider');

    if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement('div');
      sliderCounter.classList.add('slider__counter');

      var updateSliderCounter = function(slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + ' / ' +slidesCount)
      };

      $slider.on('init', function(event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
      });

      $slider.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });

      $slider.slick({
        infinite: true,
          arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
    
    
    $('.our-slider').slick({
      infinite: false,
      arrows: false,
      slidesToScroll: 1,
      variableWidth: true,
      focusOnSelect: true
    });
    var windowWidth = $(window).width();
    if(windowWidth > 767){
        $('.feedbacks').slick({
          infinite: false,
          arrows: true,
          slidesToScroll: 1,
          variableWidth: true,
          focusOnSelect: true
        });
        
        $('.cooperate-slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          variableWidth: true,
          focusOnSelect: true
        });
    }
    $(function() {
        $(".main-menu-mob ul li a.more").click(function(){
            $(this).toggleClass("active");
        });
    });
    $(function() {
        $(".hide").click(function(){
            $(this).toggleClass("active");
        });
    });
    $(function() {
        $(".mobil-menu-btn, .make-call").click(function(){
            $(this).toggleClass("active");
            $('body').toggleClass("menu-active");
            $('.main-menu-mobil').toggleClass("active");
        });
    });
    $(function() {
        $.mask.definitions['~'] = "[+-]";
        $("#date").mask("99/99/9999",{completed:function(){alert("completed!");}});
        $(".mask-phone").mask("+7 (999) 999 9 999");
        $("#phoneExt").mask("(999) 999-9999? x99999");
        $("#iphone").mask("+33 999 999 999");
        $("#tin").mask("99-9999999");
        $("#ssn").mask("999-99-9999");
        $("#product").mask("a*-999-a999", { placeholder: " " });
        $("#eyescript").mask("~9.99 ~9.99 999");
        $("#po").mask("PO: aaa-999-***");
        $("#pct").mask("99%");

        $("input").blur(function() {
            $("#info").html("Unmasked value: " + $(this).mask());
        }).dblclick(function() {
            $(this).unmask();
        });
    });
});