(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

MENU JS
DATE SLIDER JS
YOUTUBE MAGNIFIC POPUP JS

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){
	
/*--------------------------------------------------------------
 MENU JS
--------------------------------------------------------------*/

$(".menu-bar").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").addClass("active");
});
$(".close, .offcanvas-overlay").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
});


/*--------------------------------------------------------------
DATE SLIDER JS
--------------------------------------------------------------*/
var date_slider = $('.date-slider');
  if (date_slider.is_exist()) {
      date_slider.owlCarousel({
      loop:true,
      margin: 50,
      nav:true,
      dots:true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoHeight:true,
      items:4,
      navText: ["<img src=\"images/next.png\"/>",
        "<img src=\"images/prev.png\"/>"],

    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
  });

}

/*--------------------------------------------------------------
YOUTUBE MAGNIFIC POPUP JS
------------------------------------------------------------*/
var popup_youtube = $('.video-btn');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}



});/*End document ready*/


$(window).on("resize", function(){


}); // end window resize


$(window).on("load" ,function(){

}); // End window LODE


})(jQuery);






