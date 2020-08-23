$(document).ready(function(){
    $('.category_level').slick({
      arrows: false,
      infinite: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false
          }
        }
      ]
    });
    $('.main-menu-btn').click(function(e){
        e.preventDefault();
        $('body').toggleClass('mobil-menu-active');
    });
});