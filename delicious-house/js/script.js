jQuery(document).ready(function($){
    $('.open-popup1').click(function(e){
        e.preventDefault();
        $('.popup1').toggleClass('active');
        $('.oveflow').toggleClass('active');
    });
    
    $('.open-popup2').click(function(e){
        e.preventDefault();
        $('.popup2').toggleClass('active');
        $('.oveflow').toggleClass('active');
    });
    
    $('.mobil-button').click(function(e){
        e.preventDefault();
        $('.mobil-button').toggleClass('active');
        $('.header-right ul').toggleClass('active');
    });
    
    $('.open-popup3').click(function(e){
        e.preventDefault();
        $('.popup3').toggleClass('active');
        $('.oveflow').toggleClass('active');
    });
    
    $('.open-popup4').click(function(e){
        e.preventDefault();
        $('.popup4').toggleClass('active');
        $('.oveflow').toggleClass('active');
    });
    
    $('.open-popup5').click(function(e){
        e.preventDefault();
        $('.popup5').toggleClass('active');
        $('.oveflow').toggleClass('active');
    });
    
    $('.oveflow, .close').click(function(e){
        e.preventDefault();
        $('.oveflow').removeClass('active');
        $('.popup-content').removeClass('active');
    });
    
    $('.catalog-menu-button').click(function(e){
        e.preventDefault();
        $('.catalog-menu ul').toggleClass('active');
    });
    
    $(".spinner").spinner(); 
    
    $(function(){
        $(".checkbox").checkboxradio();
    });
});