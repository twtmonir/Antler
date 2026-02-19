/*------------------------------------------------------------------
Project: Antler - Hosting Provider & WHMCS Template
Description: Antler Responsive Premium Template Designed for all web hosting providers
Author: inebur (Rúben Rodrigues)
Author URI: http://inebur.com/
Author Envato: https://themeforest.net/user/inebur
-------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    backtotop();
    livechat();
});

/*----------------------*/
/*    Back To Top        */
/*----------------------*/
function backtotop() {
var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top');
$(window)
.scroll(function() {
    ($(this)
        .scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this)
        .scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
}
});
$back_to_top.on('click', function(event) {
    event.preventDefault();
    $('body,html')
    .animate({
        scrollTop: 0,
    }, scroll_top_duration);
});
}
/*----------------------*/
/*    Live Chat         */
/*----------------------*/
function livechat() {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6104204d649e0a0a5cceb6e3/1fbs1scan';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
}