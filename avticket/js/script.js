    
        jQuery(document).ready(function($){
            $('.main-menu-mobil-button').click(function(e){
                e.preventDefault();
                $('.main-menu').toggleClass('main-menu-block');
                $('.main-menu-mobil-button').toggleClass('main-menu-mobil-button-active');
            });
            $('.filter-mobil-button').click(function(e){
                e.preventDefault();
                $('.filter').toggleClass('filter-block');
            });
            $('.price-change-block-mobil-button').click(function(e){
                e.preventDefault();
                $('.price-change-block-left').toggleClass('price-change-block-left-block');
            });
        });  


    $(function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "от " + ui.values[ 0 ] + " Р " + " до " + ui.values[ 1 ] + " Р ");
          }
        });
        $( "#amount" ).val( "от " + $( "#slider-range").slider( "values", 0 ) +
          " Р до " + $( "#slider-range" ).slider( "values", 1 ) + " Р " );
      });
      $(function() {
        $( "#slider-range2" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount2" ).val( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ]);
          }
        });
        $( "#amount2" ).val( "от " + $( "#slider-range2").slider( "values", 0 ) +
          " до " + $( "#slider-range2" ).slider( "values", 1 ) );
      });
      $(function() {
        $( "#slider-range3" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount3" ).val( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );
          }
        });
        $( "#amount3" ).val( "от " + $( "#slider-range3").slider( "values", 0 ) +
          " до " + $( "#slider-range3" ).slider( "values", 1 ) );
      });
      $(function() {
        $( "#slider-range4" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount4" ).val( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );
          }
        });
        $( "#amount4" ).val( "от " + $( "#slider-range4").slider( "values", 0 ) +
          " до " + $( "#slider-range4" ).slider( "values", 1 ) );
      });
      $(function() {
        $( "#slider-range5" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount5" ).val( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );
          }
        });
        $( "#amount5" ).val( "от " + $( "#slider-range5").slider( "values", 0 ) +
          " до " + $( "#slider-range5" ).slider( "values", 1 ) );
      });
      $(function() {
        $( "#slider-range6" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount6" ).val( "от " + ui.values[ 0 ] + " дней до " + ui.values[ 1 ] + "дней" );
          }
        });
        $( "#amount6" ).val( "от " + $( "#slider-range6").slider( "values", 0 ) +
          " дней до " + $( "#slider-range6" ).slider( "values", 1 ) + " дней");
      });
$(function() {
    $( "#check" ).button();
    $( "#check1" ).button();
    $( "#check2" ).button();
    $( "#check3" ).button();
    $( "#check4" ).button();
    $( "#check5" ).button();
    $( "#check6" ).button();
    $( "#check7" ).button();
    $( "#check8" ).button();
    $( "#check9" ).button();
    $( "#check10" ).button();
});
$(function() {
    $( "#tabs" ).tabs();
    $( "#tabs1" ).tabs();
    $( "#tabs2" ).tabs();
    $( "#tabs3" ).tabs();
    $( "#tabs4" ).tabs();
    $( "#tabs5" ).tabs();
    $( "#tabs6" ).tabs();
    $( "#tabs7" ).tabs();
    $( "#tabs8" ).tabs();
    $( "#tabs9" ).tabs();
    $( "#tabs10" ).tabs();
});

  $(function() {
    $( "#radio" ).buttonset();
    $( "#radio2" ).buttonset();
    $( "#radio3" ).buttonset();
    $( "#radio4" ).buttonset();
    $( "#radio5" ).buttonset();
    $( "#radio6" ).buttonset();
    $( "#radio7" ).buttonset();
    $( "#radio8" ).buttonset();
    $( "#radio9" ).buttonset();
    $( "#radio10" ).buttonset();
    $( "#radio11" ).buttonset();
    $( "#radio12" ).buttonset();
    $( "#radio13" ).buttonset();
    $( "#radio14" ).buttonset();
  });

  $(function() {
    $( "#select-menu" ).selectmenu();
    $( "#select-menu2" ).selectmenu();
    $( "#select-menu3" ).selectmenu();
    $( "#select-menu4" ).selectmenu();
    $( "#select-menu5" ).selectmenu();
    $( "#select-menu6" ).selectmenu();
    $( "#select-menu7" ).selectmenu();
    $( "#select-menu8" ).selectmenu();
    $( "#select-menu9" ).selectmenu();
    $( "#select-menu10" ).selectmenu();
  });
$(document).ready(function() {
		$("#slideshowCont").css("overflow", "hidden");
		$("#last").css("display", "block");
		$("#next").css("display", "block");
		$('#slideShow ul').cycle({
		fx: 'scrollLeft',
		pause:1,
		next: '#next',
		prev: '#last',
		timeout:0
		});
});