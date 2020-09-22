$( document ).ready(function(){
    $('.pre-view-cer-right').slick({
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        variableWidth: true,
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.fast-choose-color').slick({
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        variableWidth: true,
        slidesToScroll: 1
    });
    $(function() {
        $(".filter-top").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $(function() {
        $(".products-more").click(function(){
            $(this).toggleClass("active");
            $('.products-content-limited').toggleClass("active");
        }); 
    });
    $(function() {
        $(".default-products").click(function(){
            $(this).addClass("active");
            $('.products').removeClass("row");
            $('.row-products').removeClass("active");
        }); 
    });
    $(function() {
        $(".row-products").click(function(){
            $(this).addClass("active");
            $('.products').addClass("row");
            
            $('.default-products').removeClass("active");
        }); 
    });
    $(function(){
        $(".tabs").tabs();
    });
    $('select#tab-select').change(function() {

            var $data_tab = $(this).find(':selected').data('tab')

            if($data_tab == 1){
                $('a[href="#tab1"]').click();
            };
            if($data_tab == 2){
                $('a[href="#tab2"]').click();
            };
            if($data_tab == 3){
                $('a[href="#tab3"]').click();
            };
            if($data_tab == 4){
                $('a[href="#tab4"]').click();
            };
            if($data_tab == 5){
                $('a[href="#tab5"]').click();
            };
            if($data_tab == 6){
                $('a[href="#tab6"]').click();
            };
            if($data_tab == 7){
                $('a[href="#tab7"]').click();
            };
            if($data_tab == 8){
                $('a[href="#tab8"]').click();
            };
        });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(window).scroll(function () {
        if ($(document).scrollTop() > 350) {
            $('.cart-box').addClass('active');
        }
        else { 
            $('.cart-box').removeClass('active');
        }
    });
    $(function() {
        $(".more-btn").click(function(){
            $('.main-video-bottom').toggleClass("active");
        }); 
    });
    $(function() {
        $(".main-menu-btn").click(function(){
            $(this).toggleClass("active");
            $('.main-menu').toggleClass("active");
            
            $('.search-btn').removeClass("active");
            $('.search-form').removeClass("active");
        }); 
    });
    $(function() {
        $(".search-btn").click(function(){
            $('.main-menu-btn').removeClass("active");
            $('.main-menu').removeClass("active");
            
            
            $(this).toggleClass("active");
            $('.search-form').toggleClass("active");
        }); 
    });
    if(window.innerWidth < 767){
        $(function() {
            $('.works-content').slick({
                arrows: false,
                infinite: true,
                focusOnSelect: true,
                variableWidth: true
            });
        });
    };
    
    
    
    
    
    
    
    
    
    
    
    
    $(function() {
        $(".contact-faq-title").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $('.trust-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.machine-park-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    if(window.innerWidth < 767){
        $('.buy-with-this-products').slick({
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
        $(".select-parameters-title").click(function(){
            $(this).toggleClass('active');
        });
        $(function() {
            $(".main-menu .catalog-btn").click(function(){
                $('.main-menu-major').toggleClass("active");
            });
        });
        $(".tab-mobile").click(function(){
            $(this).toggleClass('active');
        });
        
        
        $(function() {
            $(".level1>a").click(function(){
                $('.level1').toggleClass("active");
                $('.main-menu-dropdown').toggleClass("active");
            });
        });
        
        $(function() {
            $(".level2>a").click(function(){
                $('.level2').toggleClass("active");
                $('.level1').toggleClass("no-active");
            });
        });
        $(function() {
            $(".level3>a").click(function(){
                $('.level3').toggleClass("active");
                $('.level2').toggleClass("no-active");
            });
        });
        $(function() {
            $(".level4>a").click(function(){
                $('.level4').toggleClass("active");
                $('.level3').toggleClass("no-active");
            });
        });
    };
    if(window.innerWidth > 767){
        $(function() {
            $(".catalog-btn").click(function(){
                $(this).toggleClass('active');
                $(".main-menu-dropdown").toggleClass("active");
            });
        });
        $(function(){
            $(".product-tab").tabs();
        });
    };
    $(function() {
        $(".select-parameters-top").click(function(){
            $(this).toggleClass('active');
        });
    });
        $('.up').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
            }
            return false; // выключаем стандартное действие
        });

        $(window).scroll(function () {
                    if ($(document).scrollTop() > 1000) {
                        $('.up').addClass('active');
                    }
                    else { 
                        $('.up').removeClass('active');
                    }
        });
    
    
    $(function() {
      $('select.styler').styler();
    });
    $('.feedbacks-slider').slick({
      infinite: true,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
        responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: false
      }
    }
  ]
    });
    $('.product-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.product-slider',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
        arrows: false
    });
     $(function(){
        var spinner = $(".spinner").spinner();
     });
});