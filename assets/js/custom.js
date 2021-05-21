$(window).on("scroll", function() {

    if ($(document).scrollTop() > 0) {
        $(".custom-nav").addClass("scroll");
        $(".custom-nav").addClass("fixed-top");
    } else {
        $(".custom-nav").removeClass("scroll");
        $(".custom-nav").removeClass("fixed-top");

    }

});
$(window).on("scroll", function() {

    if ($(document).scrollTop() > 0) {
        $(".mean-nav").addClass("scroll");
        $("..mean-nav").addClass("fixe_top");
    } else {
        $("..mean-nav").removeClass("scroll");
        $("..mean-nav").removeClass("fixe_top");

    }

});
$(function() {
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav .nav-item.active').removeClass('active');
        $(this).addClass('active');
    });
});
//!WOW JS
new WOW().init();

//!Owl Carousal
$(".owl-slider").owlCarousel({
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navigation: true,
    nav: true,
    // navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//! client slide
$('.client-slide').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2800,
    nav: true,
    margin: 20,
    navigation: true,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//!testimonial
$('.testimonial-slide').owlCarousel({
    stagePadding: 50,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2800,
    margin: 10,
    nav: false,
    items: 1,
    lazyLoad: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            // stagePadding: 70
        },
        600: {
            items: 1,
            stagePadding: 100
        },
        1000: {
            items: 1,
            stagePadding: 200
        },
        1200: {
            items: 2,
            stagePadding: 190
        },
        1400: {
            items: 1,
            stagePadding: 300
        },
        1600: {
            items: 1,
            stagePadding: 220
        },
        1800: {
            items: 2,
            stagePadding: 220
        }

    }
})

//!testimonial-two
$('.testimonial-two').owlCarousel({
        stagePadding: 150,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2800,
        nav: false,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 50
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1200: {
                items: 2,
            },
        }
    })
    //!banner-slider
$(".banner-slider").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2800,
    responsive: {
        0: {
            items: 1
        }
    }
});
//!client-slider-two
$('.client-slide-two').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2800,
    nav: true,
    margin: 20,
    navigation: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//!blog-slider
$('.blog-slider').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2800,
    // center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        800: {
            items: 1
        },
        1200: {
            items: 2
        }
    }

});
//!blog-slider-two
$('.blog-slider-two').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2800,
    margin: 10,
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        700: {
            items: 2
        },
        800: {
            items: 2
        },
        900: {
            items: 2
        },
        1199: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});
//!test-slider
$('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 3
        }
    }
});
$('.project1-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2800,
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(400); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(400); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});
jQuery(document).ready(function() {
    jQuery('.mean-wrapper').meanmenu();
});