$(document).ready(function(){$(function(){$("select.styler").styler()}),$(".show_popup").click(function(){var o=$("#"+$(this).attr("rel"));$(o).show(),$(".overlay_popup").show()}),$(".overlay_popup").click(function(){$(".overlay_popup, .popup").hide()}),$(".toggle").click(function(){var o=$("#"+$(this).attr("data-target"));$(o).toggleClass("active"),$(this).toggleClass("active")}),$(function(){$(".class-name").click(function(){$(this).toggleClass("active")})}),$(function(){$(".accordion-top").click(function(){$(this).toggleClass("active")})}),$(function(){$(".tabs").tabs()}),$(".cardSlider-for").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".cardSlider-nav",arrows:!1}),$(".cardSlider-nav").slick({infinite:!1,slidesToShow:3,slidesToScroll:1,rows:2,variableWidth:!0,asNavFor:".cardSlider-for",dots:!1,focusOnSelect:!0,arrows:!1,responsive:[{breakpoint:940,settings:{slidesToShow:5}},{breakpoint:767,settings:{slidesToShow:4}},{breakpoint:413,settings:{slidesToShow:3}}]}),$(".spinner").spinner(),$(".go-to").click(function(){var o=$(this).attr("href");return 0!=$(o).length&&$("html, body").animate({scrollTop:$(o).offset().top},1e3),!1})})