$(document).ready(function() {

    var mbutton = jQuery('.mobileNavToggle');
    var  mnav = jQuery('.mobileNav');
    var cover = jQuery('.cover');

    mbutton.click( function() {
        if (parseInt(mnav.css('right')) === 0) {
            mnav.css('right', '-320px');
            cover.fadeOut();
        } else {
            mnav.css('right', '0');
            cover.fadeIn();
        }
    });

    cover.click( function() {

        if (parseInt(mnav.css('right')) === 0) {
            mnav.css('right', '-320px');
            cover.fadeOut();
        }

    });

});