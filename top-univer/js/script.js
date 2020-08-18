$( document ).ready(function(){
    $(function() {
        $(".tabs").tabs();
    });
    $(function() {
        $('.styler').styler();
    });
    $('.last-feedback__slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
    });
    $('.add-feedback-popup-open-btn, .add-feedback-popup__close, .article__btn a, .department__block__bottom__right a').click(function(e){
        e.preventDefault();
        $('.add-feedback-popup').toggleClass('active');
        $('.add-feedback-popup__overflow').toggleClass('active');
        $('body').toggleClass('hidden');
    });
    $('.add-feedback-popup__ratings__stars a').click(function(e){
        e.preventDefault();
        $(this).addClass('active');
    });
    $('.add-feedback-popup__ratings__stars').click(function(e){
        e.preventDefault();
        $(this).addClass('active');
    });
    $('.article__hidden').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.add-feedback-popup__overflow').click(function(e){
        e.preventDefault();
        $(this).removeClass('active');
        $('.add-feedback-popup').removeClass('active');
    });
    $('.search-button').click(function(e){
        e.preventDefault();
        $('.search').toggleClass('active');
        $('.wrapper').toggleClass('blur');
    });
    $('.search__close').click(function(e){
        e.preventDefault();
        $('.search').removeClass('active');
        $('.wrapper').removeClass('blur');
    });
    $('.filter__button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.filter').toggleClass('active');
    });
    $('.your-assesment__right').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.filter').toggleClass('active');
    });
    $('.list-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
        $('body').toggleClass('hidden');
    });
    $('.geo-position, .geo-position-form-overflow').click(function(e){
        e.preventDefault();
        $('.geo-position-form-overflow').toggleClass('active');
        $('.geo-position-form').toggleClass('active');
        $('body').toggleClass('hidden');
    });
    $('.FAQ-block__title').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.filter-module-btn').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.filter-module').toggleClass('active');
    });
    $('.feedback__complain').click(function(e){
        e.preventDefault();
        $('.complain-form__hidden').toggleClass('active');
        $('.complain-form').toggleClass('active');
    });
    $('.complain-form__hidden, .complain-form__close').click(function(e){
        e.preventDefault();
        $('.complain-form__hidden').removeClass('active');
        $('.complain-form').removeClass('active');
    });
    $('.thnks__close').click(function(e){
        e.preventDefault();
        $('.thnks').removeClass('active');
        $('.blur').removeClass('blur');
    });
    setTimeout(function() { $('.thnks').removeClass('active'); }, 7000);
    setTimeout(function() { $('.blur.time').removeClass('blur'); }, 7000);
    $('.spec-list select').change(function(){
        if($(this).val() === '1'){
            $('.tab1').click();  
        };
        if($(this).val() === '2'){
            $('.tab2').click();  
            $('.module__similar-school').removeClass('active');
        };
        if($(this).val() === '3'){
            $('.tab3').click();  
            $('.module__similar-school').removeClass('active');
        };
        if($(this).val() === '4'){
            $('.tab4').click();  
            $('.module__similar-school').removeClass('active');
        };
        if($(this).val() === '5'){
            $('.tab5').click(); 
            $('.module__similar-school').removeClass('active'); 
        };
    });
    $( function() {
        $( ".slider-range1__range" ).slider({
          range: true,
          min: 1,
          max: 15,
          values: [ 3, 12 ],
          slide: function( event, ui ) {
            $( ".slider-range1" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( ".slider-range1" ).val( $( ".slider-range1__range" ).slider( "values", 0 ) +
          " - " + $( ".slider-range1__range" ).slider( "values", 1 ) );
    });
    $( function() {
        $( ".slider-range2__range" ).slider({
          range: true,
          min: 1000,
          max: 125000,
          values: [ 25000, 100000 ],
          slide: function( event, ui ) {
            $( ".slider-range2" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( ".slider-range2" ).val( $( ".slider-range2__range" ).slider( "values", 0 ) +
          " - " + $( ".slider-range2__range" ).slider( "values", 1 ) );
    });
    $( function() {
        $( ".slider-range3__range" ).slider({
          range: true,
          min: 0,
          max: 125,
          values: [ 25, 85 ],
          slide: function( event, ui ) {
            $( ".slider-range3" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
          }
        });
        $( ".slider-range3" ).val( $( ".slider-range3__range" ).slider( "values", 0 ) +
          " - " + $( ".slider-range3__range" ).slider( "values", 1 ) );
    });
    $(window).scroll(function () {
        if($(document).scrollTop() > 1){
            $('body').addClass('fixed');
        }
        else{ 
            $('body.fixed').removeClass('fixed');
        }
    });
    
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;

            display.textContent = seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function () {
        var fiveMinutes = 1 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };
    var demo1 = new autoComplete({
            selector: '#search',
            minChars: 1,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = ['Московский государственный университет имени М. В. Ломоносова', 'Московская международная академия', 'МИРЭА – Российский технологический университет', 'Московский государственный технический университет им. Н.Э. Баумана', 'Национальный исследовательский Московский государственный строительный университет', 'Московский социально-педагогический институт', 'Московский открытый институт', 'Московский технический университет связи и информатики'];
                var suggestions = [];
                for (i=0;i<choices.length;i++)
                    if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                suggest(suggestions);
            }
    });
    $(".js-example-tags").select2({
      tags: true
    });
    $(".select3").select3({
      tags: true
    });
    
    
    $('.video').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 175) {
            $('.to-top').addClass('active');
        }
        else { 
            $('.to-top').removeClass('active');
        }
    });
    (function($) {
        $(function() {

          $('#up').click(function() {
            $('html, body').animate({scrollTop: 0},500);
            return false;
          })

        })
    })(jQuery)
});