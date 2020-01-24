$(function(){

	/**
	** 
	** Mobile Nav
	**
	**/

    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('body').toggleClass("menu-visible");
        if ($('body').hasClass("menu-visible")) {
            $(".menu-main-menu-container").slideDown();
        } else {
            $(".menu-main-menu-container").slideUp();
        }
    });  

    /**
    ** 
    ** Fill Screen
    **
    **/    


    function fullScreen() {
        var fullscreen = $('.fullscreen');
        //Offset
        // var offset = 0;
        // var offset = fullscreen.attr('height-offset');
        //WordPress 
        if($('body').hasClass('logged-in')) {
            var wpAdminHeight = $('#wpadminbar').outerHeight();
            offset = offset + wpAdminHeight;
        }
        var newheight = $(window).height();      
        fullscreen.css('height',newheight);
    }

    fullScreen();

   $(window).resize(function() {
        fullScreen();
    });        

});