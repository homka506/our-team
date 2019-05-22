let teamSlider = $(".ba-team-slider");
teamSlider.slick({
    dots:true,
    infinite: false,
});

let introSlider = $(".ba-intro-slider");
introSlider.slick({
    dots:true,
    infinite: false
});

let imageSlider = $('.ba-image-slider');
imageSlider.slick({
  dots: true,
  arrows: true,
  fade: false,
  speed: 500,
  infinite: true,
  adaptiveHeight: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
