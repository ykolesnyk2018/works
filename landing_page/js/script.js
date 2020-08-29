
    
    if(window.innerWidth < 992){
        $('.clients').slick({
            arrows: false,
              infinite: true,
                dots: true,
              slidesToShow: 5,
              slidesToScroll: 2,
              responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                }
            ]
        });
    };
$( document ).ready(function(){
    $('.main-menu-btn').click(function(e){
        e.preventDefault();
        $('body').toggleClass('mobile-menu-active');
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
    
});
