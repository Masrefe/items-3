(function ($) {
    "use strict";
    jQuery(document).on('ready',function () {

        
         //Hero  Slider
        $('.hero-slider').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            smartSpeed:1000

        });
        //testimonial Slider
        $('.testimonial-list').owlCarousel({
            items: 2,
            loop: true,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            smartSpeed:1000,
            margin:30,
            responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,
                nav:true
            },
            // breakpoint from 480 up
            480 : {
                items:1,
                nav:true
            },
            // breakpoint from 768 up
            768 : {
                items:2,
                nav:true
            }
            }

        }); 
        // homepage slider animation support
            $(".hero-slider").on("translate.owl.carousel", function(){
                $(".hero-content h2, .hero-content p").removeClass("animated fadeInUp").css({'opacity':'0'});
                $(".absolate-mobile img").removeClass("animated fadeInUp").css({'opacity':'0'});
                $(".hero-content a").removeClass("animated fadeInDown").css({'opacity':'0'});
            });
            
            $(".hero-slider").on("translated.owl.carousel", function(){
                $(".hero-content h2, .hero-content p").addClass("animated fadeInUp").css({'opacity':'0'});
                $(".absolate-mobile img").addClass("animated fadeInUp").css({'opacity':'0'});
                $(".hero-content a").addClass("animated fadeInDown").css({'opacity':'0'});
            });
        // Video Active
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });   
 
    });

})(jQuery);