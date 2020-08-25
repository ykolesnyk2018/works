    $(function() {
      $('select').styler();
    });
    $('.main-menu-btn').click(function(e){
        e.preventDefault();
        $('body').toggleClass('mobil-menu-active');
    });
    $('.bonus-btn').click(function(e){
        e.preventDefault();
        $('.right-top-btns').toggleClass('active');
    });
    $('.close-bonus').click(function(e){
        e.preventDefault();
        $('.right-top-btns').removeClass('active');
    });
    $('.balance').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        
        $('.setting-menu').removeClass('active');
        $('.setting').removeClass('active');
    });
    $('.setting').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.setting-menu').toggleClass('active');
        
        $('.balance').removeClass('active');
    });
    $(function(){
        $(".tabs").tabs();
    });