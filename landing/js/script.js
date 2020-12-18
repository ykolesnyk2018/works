$(document).ready(function(){
	$(function() {
		$('select.styler').styler();
  	});
	/* popUp */
    $('.show_popup').click(function() {
		var popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).show();
		$('.overlay_popup').show();
	}); 
	$('.overlay_popup').click(function() {
		$('.overlay_popup, .popup').hide();
	});
	/* popUp */
    $(function() {
        $(".class-name").click(function(){
            $(this).toggleClass("active");
        }); 
    });
    $(function(){
        $(".tabs").tabs();
    });
	$('.one-time').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
	
	
	
	
	
	
	
	
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
});