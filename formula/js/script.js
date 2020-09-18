$( document ).ready(function(){
    $('.players-nav-li').click(function(e){
        e.preventDefault();
        $('.players-nav-li').removeClass('active');
        $(this).addClass('active');
    });
    $('.attention-close').click(function(e){
        e.preventDefault();
        $('.attention').removeClass('active');
    });
    $('.search-btn, .search-btn-mob').click(function(e){
        e.preventDefault();
        $('.search-popup').toggleClass('active');
    });
    $('.btn-grid').click(function(e){
        e.preventDefault();
        $('.grid-nav').removeClass('grid1');
        $('.grid-nav').removeClass('grid2');
        $('.grid-nav').removeClass('grid3');
        $('.grid-nav').removeClass('grid4');
        $('.grid-nav').removeClass('grid5');
        $('.grid').removeClass('grid1');
        $('.grid').removeClass('grid2');
        $('.grid').removeClass('grid3');
        $('.grid').removeClass('grid4');
        $('.grid').removeClass('grid5');
    });
    
    $('.match-tab1').click(function(e){
        e.preventDefault();
        $('.match-tab2').removeClass('active');
        $('.match-center2').removeClass('active');
        
        $(this).addClass('active');
        $('.match-center1').addClass('active');
    });
    $('.match-tab2').click(function(e){
        e.preventDefault();
        $('.match-tab1').removeClass('active');
        $('.match-center1').removeClass('active');
        
        $(this).addClass('active');
        $('.match-center2').addClass('active');
    });
    
    
    $('.btn-grid1').click(function(e){
        e.preventDefault();
        $('.grid-nav').addClass('grid1');
        $('.grid').addClass('grid1');
    });
    $('.btn-grid2').click(function(e){
        e.preventDefault();
        $('.grid-nav').addClass('grid2');
        $('.grid').addClass('grid2');
    });
    
    $('.btn-grid3').click(function(e){
        e.preventDefault();
        $('.grid-nav').addClass('grid3');
        $('.grid').addClass('grid3');
    });
    $('.btn-grid4').click(function(e){
        e.preventDefault();
        $('.grid-nav').addClass('grid4');
        $('.grid').addClass('grid4');
    });
    $('.btn-grid5').click(function(e){
        e.preventDefault();
        $('.grid-nav').addClass('grid5');
        $('.grid').addClass('grid5');
    });
    
    
    
    $('.blog-menu>ul>li>a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.main-menu-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('.main-menu-mobil').toggleClass('active');
        $('.wrapper').toggleClass('fixed');
    });
    $('.main-menu-mobil>ul>li.child>a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    
    $('.open-popup').click(function(e){
        e.preventDefault();
        $('.overflow').toggleClass('active');
    });
    $('.close, .overflow').click(function(e){
        e.preventDefault();
        $('.overflow').removeClass('active');
        $('.popup').removeClass('active');
    });
    $('.open-popup1').click(function(e){
        e.preventDefault();
        $('.popup1').toggleClass('active');
    });
    $('.open-popup2').click(function(e){
        e.preventDefault();
        $('.popup2').toggleClass('active');
    });
    $('.open-popup3').click(function(e){
        e.preventDefault();
        $('.popup3').toggleClass('active');
    });
    $('.open-popup4').click(function(e){
        e.preventDefault();
        $('.popup4').toggleClass('active');
    });
    $('.accordion-title').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $(function(){
        $(".tabs").tabs();
    });
    $('.press-center-left').slick({
      infinite: true,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.main-slider').slick({
      infinite: true,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });	
    $('.players-slider').slick({
      infinite: true,
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.photo-gallery-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1919,
          settings: {
            dots: true
          }
        }, 
        {
            breakpoint: 979,
            settings: {
                variableWidth: false,
                adaptiveHeight: true,
                dots: true,
            }
        }
      ]
    });
    $('select').styler();
    $('.adaptive-slider').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          variableWidth: true,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 979,
              settings: {
                variableWidth: false
              }
            }
          ]
    });
    $('.magazines-slider').slick({
          arrows: true,
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          variableWidth: true
    });
    var windowWidth = $(window).width();
    if(windowWidth < 1900){
        $(function(){
            $(".spec-tabs").tabs();
        });
    }    
    if(windowWidth < 979){
        $('.grid3').removeClass('grid3');
        $('.grid3').removeClass('grid3');
        
        $('.grid').addClass('grid1');
        $('.grid-nav').addClass('grid1');
    }    
    if(windowWidth < 767){
        $('.competition-slider').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToShow: 1
        });
    }    
    competition-slider
    $('.players-slider-bg .slick-arrow').click(function(e){
        e.preventDefault();
        $('.players-nav-li').removeClass('active');
        if ( $(".players-slider-bg .slick-dots li:nth-child(1)").hasClass("slick-active") ) {
            $('.players-nav-ul:nth-child(1) .players-nav-li:nth-child(1)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(2)").hasClass("slick-active") ) {
            $('.players-nav-ul:nth-child(1) .players-nav-li:nth-child(2)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(3)").hasClass("slick-active") ) {
            $('.players-nav-ul:nth-child(1) .players-nav-li:nth-child(3)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(4)").hasClass("slick-active") ) {
            $('.players-nav-ul:nth-child(1) .players-nav-li:nth-child(4)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(5)").hasClass("slick-active") ) {
            $('.players-nav-ul:nth-child(1) .players-nav-li:nth-child(5)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(6)").hasClass("slick-active") ) {
            $('.players-nav-li:nth-child(6)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(7)").hasClass("slick-active") ) {
            $('.players-nav-li:nth-child(7)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(8)").hasClass("slick-active") ) {
            $('.players-nav-li:nth-child(8)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(9)").hasClass("slick-active") ) {
            $('.players-nav-li:nth-child(9)').addClass("active");
        }
        if ( $(".players-slider-bg .slick-dots li:nth-child(10)").hasClass("slick-active") ) {
            $('.players-nav-li:nth-child(10)').addClass("active");
        }
    });
    
    /* Навигация для слайдера с Игроками */
    $('.players-nav-li:nth-child(1)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(1) button').click();
        $(".players-slider-bg .slick-dots li:nth-child(1)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(2)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(2) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(2)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(3)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(3) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(3)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(4)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(4) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(4)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(5)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(5) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(5)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(6)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(6) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(6)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(7)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(7) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(7)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(8)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(8) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(8)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(9)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(9) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(9)").attr("aria-selected", 'true');
    });
    $('.players-nav-li:nth-child(10)').click(function(e){
        e.preventDefault();
        $('.players-slider .slick-dots li:nth-child(10) button').click();
        $(".players-slider-bg .slick-dots li").attr("aria-selected", 'false');
        $(".players-slider-bg .slick-dots li:nth-child(10)").attr("aria-selected", 'true');
    });
    /* Навигация для слайдера с Игроками */
});