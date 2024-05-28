(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Smooth scrolling on the buttons
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 70,
            backSpeed: 15,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // webs 

    // on click in the web-1 id element
    $("#web-1").on('click', function () {
        // go to the html page
        window.location.href = "./webs/coffee-shop-html-template/index.html";
    });

    // on click in the web-2 id element
    $("#web-2").on('click', function () {
        // go to the html page
        window.location.href = "./webs/bootstrap-restaurant-template/index.html";
    });

    // on click in the web-3 id element
    $("#web-3").on('click', function () {
        // go to the html page
        window.location.href = "./webs/templatemo_515_eatery/index.html";
    });

    // on click in the web-4 id element
    $("#web-4").on('click', function () {
        // go to the html page
        window.location.href = "./webs/ice-cream-shop-website-template/index.html";
    });

    // on click in the web-5 id element
    $("#web-5").on('click', function () {
        // go to the html page
        window.location.href = "./webs/Italian-Cuisine/index.html";
    });

    // on click in the web-6 id element
    $("#web-6").on('click', function () {
        // go to the html page
        window.location.href = "./webs/drinker/index.html";
    });

    // on click in the web-7 id element
    $("#web-7").on('click', function () {
        // go to the html page
        window.location.href = "./webs/foodhut/public_html/index.html";
    });

    // on click in the web-8 id element
    $("#web-8").on('click', function () {
        // go to the html page
        window.location.href = "./webs/fruitkha-1.0.0/index.html";
    });

    // on click in the web-9 id element
    $("#web-9").on('click', function () {
        // go to the html page
        window.location.href = "./webs/pato-master/index.html";
    });

    // on click in the web-10 id element
    $("#web-10").on('click', function () {
        // go to the html page
        window.location.href = "./webs/templatemo_466_cafe_house/index.html";
    });

    // on click in the web-11 id element
    $("#web-11").on('click', function () {
        // go to the html page
        window.location.href = "./webs/templatemo_558_klassy_cafe/index.html";
    });

    // on click in the web-12 id element
    $("#web-12").on('click', function () {
        // go to the html page
        window.location.href = "./webs/yamifood/index.html";
    });

    // on click in the web-13 id element
    $("#web-13").on('click', function () {
        // go to the html page
        window.location.href = "./webs/Yummy/index.html";
    });

    // on click in the web-14 id element
    $("#web-14").on('click', function () {
        // go to the html page
        window.location.href = "./webs/feane-1.0.0/index.html";
    });

    // on click in the web-15 id element
    $("#web-15").on('click', function () {
        // go to the html page
        window.location.href = "./webs/eatery-new-master/index.html";
    });

    // on click in the web-16 id element
    $("#web-16").on('click', function () {
        // go to the html page
        window.location.href = "./webs/Restaurantly/index.html";
    });

    // on click in the web-17 id element
    $("#web-17").on('click', function () {
        // go to the html page
        window.location.href = "./webs/Delicious/index.html";
    });

    // on click in the web-18 id element
    $("#web-18").on('click', function () {
        // go to the html page
        window.location.href = "./webs/spicyo/index.html";
    });



    
})(jQuery);
