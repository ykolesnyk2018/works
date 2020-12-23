$(document).ready(function(){
    $('.choose-country-cont').click(function() {
    	$('.choose-country').toggleClass("active");
    });
    $('.choose-country-drop > div').click(function() {
		$(".form input[name='phone']").removeAttr('class');
    	$('.choose-country').removeClass("active");
		var choose_class = $(this).attr("data-target");
		var choose = $(this).html();
		$('.choose-country-cont').html(choose);
		$(".form input[name='phone']").addClass(choose_class);
		$(function() {
			$.mask.definitions['~'] = "[+-]";
			$("input.ru").mask("+ 7 (999) 999 99 99").attr("placeholder", "+ 7 926 700 10 27");
			$("input.uk").mask("+38 099 999 99 99").attr("placeholder", "+38 050 253 19 27");
			$("input.bel").mask("+375 99 999999").attr("placeholder", "+375 17 531927");

			$("input").blur(function() {
				$("#info").html("Unmasked value: " + $(this).mask());
			}).dblclick(function() {
				$(this).unmask();
			});
		});
    });
	$(function() {
		$.mask.definitions['~'] = "[+-]";
		$("input.ru").mask("+ 7 (999) 999 99 99").attr("placeholder", "+ 7 926 700 10 27");
		$("input.uk").mask("+ 38 099 999 99 99").attr("placeholder", "+ 38 050 253 19 27");
		$("input.bel").mask("+ +375 99 999999").attr("placeholder", "+375 17 531927");

		$("input").blur(function() {
			$("#info").html("Unmasked value: " + $(this).mask());
		}).dblclick(function() {
			$(this).unmask();
		});
	});
	
    $('footer ul li a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false;
    });
    $('.go-to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 1000); 
        }
	    return false;
    }); 
});