$(document).ready(function(){
	$(function() {
		$('select').styler();
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
        $(".main-menu-btn").click(function(){
            $(this).toggleClass("active");
            $('.header-left nav').toggleClass("active");
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
});