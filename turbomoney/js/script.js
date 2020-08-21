$( document ).ready(function(){
    $('.faq-block-top').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.my-team-top').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.main-menu-btn').click(function(e){
        e.preventDefault();
        $('.main-menu').toggleClass('active');
    });
    if(window.innerWidth < 1150){
        $('.autopools').slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
    };
    if(window.innerWidth < 767){
        $('.statistics').slick({
          arrows: false,
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          variableWidth: true
        });
        $('.auccount-users').slick({
          arrows: false,
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          variableWidth: true
        });
        $('.earning').slick({
          arrows: false,
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          variableWidth: true
        });
    };
    $(function(){
        $(".tab").tabs();
    });
    
    
    
    
    
    
    
    $('.blog-menu>ul>li>a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.forum-menu li.more').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    
    $('.open-popup').click(function(e){
        e.preventDefault();
        $('.overflow').toggleClass('active');
    });
    $('.overflow, .close').click(function(e){
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
    $('.open-popup5').click(function(e){
        e.preventDefault();
        $('.popup5').toggleClass('active');
    });
    $('.open-popup6').click(function(e){
        e.preventDefault();
        $('.popup6').toggleClass('active');
    });
});