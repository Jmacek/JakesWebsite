"use strict";
//Initialize wow animations
new WOW().init();

//checks if on mobile
var isMobile = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

//Resize main on document ready
$(document).ready(function(){
    $('.content-div').css("min-height", $(window).height());
});

//Resize screen to fit window width. Disabled at the moment because it causes too much lag.
//$(window).on('resize', function(){
//    if(!isMobile) {
//        $('.content-div').css("min-height", $(window).height());
//    }
//});

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
