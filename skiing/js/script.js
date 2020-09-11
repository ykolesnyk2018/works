$(document).ready(function(){
    $(function() {
        $(".search-btn").click(function(){
            $(this).toggleClass("active");
            $('.search').toggleClass("active");
        });
    });
    $(function() {
        $(".mobil-main-menu-btn").click(function(){
            $('.mobil-menu').addClass("active");
        });
    });
    $(function() {
        $(".close-mobile-menu").click(function(){
            $('.mobil-menu').removeClass("active");
        });
    });
    $(function() {
        $(".mobil-search-btn").click(function(){
            $('.search').addClass("active");
        });
    });
    $(function() {
        $(".close-mobil-search").click(function(){
            $('.search').removeClass("active");
        });
    });
    $(function() {
        $(".faq-title").click(function(){
            $(this).toggleClass("active");
        });
    });
    $('.up').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
            }
            return false; // выключаем стандартное действие
    });
    $('.main-slider').slick({
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 600) {
            $('.up').addClass('active');
        }
        else { 
            $('.up').removeClass('active');
        }
    });
    $(function() {
      $('select').styler();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $(function() {
        $(".more-btn").click(function(){
            $(this).toggleClass("active");
        });
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