(function (window) {
	'use strict';
	var $ = window.jQuery,
		console = window.console,
        pos = 0;

    /************************* Contents *********************************



    ************************ End Contents *******************************/ 
    $(document).on('click', '.menu', function () {
        if ($('.navigation-list').hasClass('open')) {
            $('.navigation-list').removeClass('open');
        } else {
            $('.navigation-list').addClass('open');
        }
    });

    (function () {
        var lastScrollTop = 0;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();
           if (st > lastScrollTop){
               // downscroll code
               $('.navigation-list').removeClass('open');
               $('header').addClass('scroll');
           } else {
              // upscroll code
              $('header').removeClass('scroll');
           }
           lastScrollTop = st;
        });
    }());
    
	    
    /*
    Back To Top [`BTOP]
    ==================================================================== */
	
	$(function () {
        var offset = 500,
            duration = 500;
        
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.btn-return-top').fadeIn(duration);
            } else {
                $('.btn-return-top').fadeOut(duration);
            }
            
            if ($(this).scrollTop() >= 982) {
                $('.static-bg').addClass('active');
            } else {
                $('.static-bg').removeClass('active');
            }
        });

        $('.btn-return-top').click(function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
	});        

	
}(this));