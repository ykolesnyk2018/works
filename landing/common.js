$(document).ready(function() {

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
	
});