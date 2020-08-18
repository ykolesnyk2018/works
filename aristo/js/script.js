$(document).ready(function() {
    $(function() {
      $('select.styler').styler();
    });
    $(function() {
            $.mask.definitions['~'] = "[+-]";
            $("#date").mask("99/99/9999",{completed:function(){alert("completed!");}});
            $(".phone-mask").mask("+375 (99) 999-99-99");
            $("#phoneExt").mask("(999) 999-9999? x99999");
            $("#iphone").mask("+33 999 999 999");
            $("#tin").mask("99-9999999");
            $("#ssn").mask("999-99-9999");
            $("#product").mask("a*-999-a999", { placeholder: " " });
            $("#eyescript").mask("~9.99 ~9.99 999");
            $("#po").mask("PO: aaa-999-***");
            $("#pct").mask("99%");

            $("input").blur(function() {
                $("#info").html("Unmasked value: " + $(this).mask());
            }).dblclick(function() {
                $(this).unmask();
            });
    });
    $('.open-popup').click(function(e){
        e.preventDefault();
        $('.overflow').toggleClass('active');
        $('.close').toggleClass('active');
    });
    $('.overflow, .close, .close-button').click(function(e){
        e.preventDefault();
        $('.popup.active').removeClass('active');
        $('.overflow.active').removeClass('active');
        $('.close.active').removeClass('active');
    });
    $('.open-popup1').click(function(e){
        e.preventDefault();
        $('.popup-1').toggleClass('active');
    });
    $('.open-popup2').click(function(e){
        e.preventDefault();
        $('.popup2').toggleClass('active');
    });
    $('.open-popup3').click(function(e){
        e.preventDefault();
        $('.popup3').toggleClass('active');
    });
    $('.open-popup4').click(function(e){
        e.preventDefault();
        $('.popup4').toggleClass('active');
    });
    $('.styler').click(function(e){
        e.preventDefault();
        $('.styler').toggleClass('opened');
    });
    if(document.getElementById('color-1').checked){
        $('.slider-of-products').toggleClass('active-1');
    }else{
        $('.active-1').removeClass('active-1');
    }
    if(document.getElementById('color-2').checked){
        $('.slider-of-products').toggleClass('active-2');
    }
    $("input").change(function(){
        if($("#color-1").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(0, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(1)').addClass('active');
        }
        if($("#color-2").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-500px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(2)').addClass('active');
        }
        if($("#color-3").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-1000px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(3)').addClass('active');
        }
        if($("#color-4").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-1500px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(4)').addClass('active');
        }
        if($("#color-5").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-2000px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(5)').addClass('active');
        }
        if($("#color-6").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-2500px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(6)').addClass('active');
        }
        if($("#color-7").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-3000px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(7)').addClass('active');
        }
        if($("#color-8").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-3500px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(8)').addClass('active');
        }
        if($("#color-9").prop("checked")){
            $('.slider-of-products-list').css({
            'transform': 'translate3d(-4000px, 0px, 0px)'
            });
            $('.slider-of-products-list>div.active').removeClass('active');
            $('.slider-of-products-list>div:nth-child(9)').addClass('active');
        }
    });
    $('.slider-for').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
    $("*").mousemove(function(){
        if($("#menu li:nth-child(1)").hasClass("active")){
            $(".up").attr("href", "#block1");
            $(".down").attr("href", "#block2");
            $(".up").addClass('no-active');
            $(".down").removeClass('no-active');
        }
        if($("#menu li:nth-child(2)").hasClass("active")){
            $(".up").attr("href", "#block1");
            $(".down").attr("href", "#block3");
            $(".up, .down").removeClass('no-active');
        }
        if($("#menu li:nth-child(3)").hasClass("active")){
            $(".up").attr("href", "#block2");
            $(".down").attr("href", "#block4");
            $(".up, .down").removeClass('no-active');
        }
        if($("#menu li:nth-child(4)").hasClass("active")){
            $(".up").attr("href", "#block3");
            $(".down").attr("href", "#block4");
            $(".down").addClass('no-active');
            $(".up").removeClass('no-active');
        }
    });
    $(window).scroll(function () {
                if ($(document).scrollTop() > 1) {
                    $(".up").attr("href", "#block1");
                    $(".down").attr("href", "#block2");
                    $(".up").addClass('no-active');
                    $(".down").removeClass('no-active');
                    
                    $("header").addClass('fixed');
                    $("#menu li").removeClass('active');
                    $("#menu li:nth-child(1)").addClass('active');
                }
                else { 
                    $("header").removeClass('fixed');
                }
                if ($(document).scrollTop() > 600) {
                    $(".up").attr("href", "#block1");
                    $(".down").attr("href", "#block3");
                    $(".up, .down").removeClass('no-active');
                    $("#menu li").removeClass('active');
                    $("#menu li:nth-child(2)").addClass('active');
                }
                else { 
                    $('.top-discs-block3').removeClass('top-discs-block3');
                }
                if ($(document).scrollTop() > 1300) {
                    $(".up").attr("href", "#block2");
                    $(".down").attr("href", "#block4");
                    $(".up, .down").removeClass('no-active');
                    $("#menu li").removeClass('active');
                    $("#menu li:nth-child(3)").addClass('active');
                }
                else { 
                    $('.top-discs-block4').removeClass('top-discs-block4');
                }
                if ($(document).scrollTop() > 2500) {
                    $(".up").attr("href", "#block3");
                    $(".down").attr("href", "#block4");
                    $(".down").addClass('no-active');
                    $(".up").removeClass('no-active');
                    
                    $("#menu li").removeClass('active');
                    $("#menu li:nth-child(4)").addClass('active');
                }
                else { 
                    $('.top-discs-block5').removeClass('top-discs-block5');
                }
            });
    function detectBrowserSize() {
        var myWidth = 0;
        if (typeof (window.innerWidth) == 'number') {
            //Non-IE
            myWidth = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
        } else if (document.body && document.body.clientWidth) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
        }
        return myWidth;
    }
    if (detectBrowserSize() < 979 ){
        $("input").change(function(){
            if($("#color-1").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(0, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(1)').addClass('active');
            }
            if($("#color-2").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-350px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(2)').addClass('active');
            }
            if($("#color-3").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-700px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(3)').addClass('active');
            }
            if($("#color-4").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-1050px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(4)').addClass('active');
            }
            if($("#color-5").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-1400px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(5)').addClass('active');
            }
            if($("#color-6").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-1750px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(6)').addClass('active');
            }
            if($("#color-7").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-2100px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(7)').addClass('active');
            }
            if($("#color-8").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-2450px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(8)').addClass('active');
            }
            if($("#color-9").prop("checked")){
                $('.slider-of-products-list').css({
                'transform': 'translate3d(-2800px, 0px, 0px)'
                });
                $('.slider-of-products-list>div.active').removeClass('active');
                $('.slider-of-products-list>div:nth-child(9)').addClass('active');
            }
        });
    }
    $('#menu li a, .first-section-button a, .make-order a, .up, .down').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
            }
            return false; // выключаем стандартное действие
        });
    
    
    
    
    
	$("#form1").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
            
            $('#form1 input').val("");
            
            $('.popup-1').removeClass('active');
            
            $('.popup-2').toggleClass('active');
			
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
            
            
            $('#form2 input').val("");
            
            $('.overflow').toggleClass('active');
            
            $('.popup-2').toggleClass('active');
			
            $("#form").trigger("reset");
		});
		return false;
	});
});
