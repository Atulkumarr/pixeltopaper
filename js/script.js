$('.banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    autoplayHoverPause: false,
    nav: false,
    dots: false, 
    mouseDrag: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
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
$('.wall-mount-slider').owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    autoplayHoverPause: false,
    nav: true,
    dots: false,
    // loop: false,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});