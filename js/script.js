// owl
$(".banner-slider").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1500,
  autoplayHoverPause: false,
  nav: false,
  dots: false,
  mouseDrag: false,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".wall-mount-slider").owlCarousel({
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
      items: 1,
    },
    517: {
      items: 2,
    },
    700: {
      items: 3,
    },
  },
});

// for modal

$(".product-box,.hover-div,.last-img").click(function () {
  $(".click-box").addClass("add-me");
});
$(".close-click").click(function () {
  $(".click-box").removeClass("add-me");
});

// hamburger code
$(".menu").click(function () {
  $(".navigation ul").toggleClass("active-ul");
});

// blur div
$(".product-box,.hover-div,.last-img").click(function () {
  $("nav, header, section, footer").addClass("blur-div");
});
$(".close-click").click(function () {
  $("nav, header, section, footer").removeClass("blur-div");
});
