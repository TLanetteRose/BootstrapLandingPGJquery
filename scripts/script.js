//scroll to top of page on page refresh

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
//Tested on Chrome and Firefox, needs tweaks for Safari

//Bouncing downward arrow click functionality
$(document).ready(function(){
    $('#down').on('click', function(){
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
    });
});