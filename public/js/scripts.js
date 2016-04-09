"use strict";

$( document ).ready(function() {
    console.log( "ready!" );
});

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