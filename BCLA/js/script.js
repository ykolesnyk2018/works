$('.popup-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
});
$('.popup-gallery2').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
});
$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    } 
});
$('.slide-articles-of-blog').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(".accordion-header").click(function() {
  $(this).toggleClass("active");
});
$(".faq-header").click(function() {
  $(this).toggleClass("active");
});
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

    $('.mobil-main-menu-button').click(function(e){
        e.preventDefault();
        $('.left-bar .main-menu').toggleClass('active');
    });

    $('.button-menu, .big-menu-close').click(function(e){
        e.preventDefault();
        $('.big-menu').toggleClass('active');
    });

    $('.open-popup').click(function(e){
        e.preventDefault();
        $('.overflow').toggleClass('active');
        $('.close').toggleClass('active');
    });
    $('.overflow, .close').click(function(e){
        e.preventDefault();
        $('.popup.active').removeClass('active');
        $('.overflow.active').removeClass('active');
        $('.close.active').removeClass('active');
    });
    $('.open-popup1').click(function(e){
        e.preventDefault();
        $('.popup1').toggleClass('active');
    });

$("select").selectmenu();
$(function(){
    $(".tabs").tabs();
});