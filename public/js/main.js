<!--Autoscroll, parallax and scroll animations-->

var scrolling = false;

function scrollToTabs() {
    setTimeout(function() {
        if(!scrolling && $("#topTabs").offset().top - $(window).scrollTop() != 0) {
            scrolling = true;
            setTimeout(function() {scrolling = false}, 1500);
            $('html, body').animate({
                scrollTop: $("#topTabs").offset().top
            }, 1400);
        }
    },50);
}

document.addEventListener('DOMContentLoaded', function(){
    $("#buttonTab1").click(scrollToTabs);
    $("#buttonTab2").click(scrollToTabs);
    $("#buttonTab3").click(scrollToTabs);
    $("#buttonTab4").click(scrollToTabs);
    $("#buttonTab5").click(scrollToTabs);
    $('.parallax').parallax();
    AOS.init();
});
