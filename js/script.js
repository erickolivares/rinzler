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

});