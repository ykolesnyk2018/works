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
	
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
            
            document.getElementById('form').innerHTML='<div class="all-ok">Спасибо за сообщение мы свяжемся с вами в течении 5 минут!</div>'; // Див сам создай с таким же id
			
            $("#form").trigger("reset");
		});
		return false;
	});
	$("#form2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail2.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
            
            document.getElementById('form2').innerHTML='<div class="all-ok">Спасибо за сообщение мы свяжемся с вами в течении 5 минут!</div>'; // Див сам создай с таким же id
			
            $("#form2").trigger("reset");
		});
		return false;
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