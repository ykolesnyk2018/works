$( document ).ready(function(){
    $(function() {
        $(".catalog-btn").click(function(){
            $(this).toggleClass('active');
            $(".main-menu-dropdown").toggleClass("active");
        });
    });
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
      $('select').styler();
    });
    $(function(){
        $(".tabs").tabs();
    });
});