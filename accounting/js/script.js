$(document).ready(function(){
    $(function() {
        $(".faq-title").click(function(){
            $(this).toggleClass("active");
        });
    });
    $(function() {
        $(".main-menu-btn").click(function(){
            $(this).toggleClass("active");
            $('.main-menu').toggleClass("active");
        });
    });
    $(function() {
        $(".close").click(function(){
            $('.popup').removeClass("active");
        });
    });
    $(function() {
        $(".open-popup1").click(function(){
            $('.popup1').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup2").click(function(){
            $('.popup2').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup3").click(function(){
            $('.popup3').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup4").click(function(){
            $('.popup4').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup5").click(function(){
            $('.popup5').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup6").click(function(){
            $('.popup6').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup7").click(function(){
            $('.popup7').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup8").click(function(){
            $('.popup8').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup9").click(function(){
            $('.popup9').toggleClass("active");
        });
    });
    $(function() {
        $(".open-popup10").click(function(){
            $('.popup10').toggleClass("active");
        });
    });
    $('.main-menu a').click( function(){ // ловим клик по ссылке с классом go_to
	   var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});