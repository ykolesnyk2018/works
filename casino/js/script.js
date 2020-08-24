    $(function() {
      $('select').styler();
    });
    $('.main-menu-btn').click(function(e){
        e.preventDefault();
        $('body').toggleClass('mobil-menu-active');
    });