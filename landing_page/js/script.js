
    
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
    $('.main-menu-btn, .main-menu ul li a').click(function(e){
        e.preventDefault();
        $('body').toggleClass('mobile-menu-active');
    });
    $('.up, .main-menu ul li a, .footer-nav ul li a').click( function(){ // ловим клик по ссылке с классом go_to
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
     $('.tarif1-btn').click(function(e){
        $(".tarif1 .tarif-price b").text("1900");
        $(".tarif2 .tarif-price b").text("2900");
        $(".tarif3 .tarif-price b").text("7500");
        $(".tarif-duration").text("3 месяца");
    });
     $('.tarif2-btn').click(function(e){
        $(".tarif-price b").text("7500");
        $(".tarif1 .tarif-price b").text("2900");
        $(".tarif2 .tarif-price b").text("3900");
        $(".tarif3 .tarif-price b").text("10000");
        $(".tarif-duration").text("6 месяцев");
    });
     $('.tarif3-btn').click(function(e){
        $(".tarif1 .tarif-price b").text("4900");
        $(".tarif2 .tarif-price b").text("5900");
        $(".tarif3 .tarif-price b").text("15000");
        $(".tarif-duration").text("1 год");
    });
     $('.open-popup').click(function(e){
        e.preventDefault();
        $('.hidden').addClass('active');
        $('.close').addClass('active');
    });
    $('.open-popup1').click(function(e){
        e.preventDefault();
        $('.popup1').addClass('active');
    });
    $('.open-popup2').click(function(e){
        e.preventDefault();
        $('.popup2').addClass('active');
    });
    $('.close, .hidden').click(function(e){
        e.preventDefault();
        $('.hidden').removeClass('active');
        $('.close').removeClass('active');
        $('.popup').removeClass('active');
    });
});

    
	$(".main-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
            
            document.getElementsByClassName('main-form').innerHTML='<div class="all-ok">Спасибо за сообщение мы свяжемся с вами в течении 5 минут!</div>'; // Див сам создай с таким же id
			
            $(".main-form").trigger("reset");
		});
		return false;
	});