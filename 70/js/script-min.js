$(document).ready(function(){$(function(){$("select.styler").styler()}),$(".toggle").click(function(){var s=$("#"+$(this).attr("data-target"));$(this).toggleClass("active"),$(s).toggleClass("active")}),$(".show_popup").click(function(){var s=$("#"+$(this).attr("rel"));$(s).show(),$(".overlay_popup").show()}),$(".overlay_popup").click(function(){$(".overlay_popup, .popup").hide()}),$(function(){$(".class-name").click(function(){$(this).toggleClass("active")})}),$(function(){$(".tabs").tabs()}),$(".mainSlider").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,autoplay:!0,autoplaySpeed:2e3}),$(".our-par-slider").slick({dots:!1,infinite:!0,speed:300,slidesToShow:5,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:940,settings:{slidesToShow:3,slidesToScroll:1,variableWidth:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1}}]}),$(".about-us-slider").slick({dots:!1,infinite:!0,speed:300,slidesToShow:5,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1170,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:940,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1}}]}),$(".our-works-slider").slick({dots:!1,infinite:!0,speed:300,slidesToShow:3,variableWidth:!0,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1170,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:940,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!1}}]})})