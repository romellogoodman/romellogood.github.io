function isScrolledIntoView(o){var i=$(window).scrollTop(),n=i+$(window).height(),t=$(o).position().top,a=t+$(o).height();return n>=a}function displayBox(){isScrolledIntoView($(".box"))?$(".fade-caption").fadeIn("slow"):$(".fade-caption").fadeOut("slow")}$(document).ready(function(){$(window).scroll(function(){displayBox(),$("nav").height()<$(window).scrollTop()?$("nav").addClass("fixed"):$("nav").removeClass("fixed")}),displayBox(),$("article").css("marginTop",$("nav").height()+30),$(".button").click(function(){$("body").animate({scrollTop:$("#footer").offset().top},1500)}),$("nav img").click(function(){$("body").animate({scrollTop:0},1250)})});