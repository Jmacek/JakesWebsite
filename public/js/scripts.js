"use strict";
//Initialize wow animations
new WOW().init();

//Resize main on document ready
$(document).ready(function(){
    $('.main').css("height", $(window).height());
    $('.aboutme').css("height", $(window).height());
    $('.projects').css("height", $(window).height());
});

//Resize screen to fit window width, to work around faulty height css property
$(window).on('resize', function(){
    $('.main').css("height", $(window).height());
    $('.aboutme').css("height", $(window).height());
    $('.projects').css("height", $(window).height());
});



//Allows for navbar scrolling
var mainNav = $(".main-nav"),
    mainNavScroll = "main-nav-scrolled";
   // padding = $('body').css('padding'); Unfortunately it needs to activate at 50 not 50px

$(window).scroll(function(){
   if ($(this).scrollTop() > 50){
       mainNav.addClass(mainNavScroll);
   }
   else {
       mainNav.removeClass(mainNavScroll);
   }
});
//Scroll animation for page-scroll links
$(".page-scroll").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});