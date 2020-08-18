 jQuery(document).ready(function($){ 
    $('.mobil-menu-button').click(function(e){
        e.preventDefault();
        $('header nav ul').toggleClass('active');
        $('.mobil-menu-button').toggleClass('active');
    });
});