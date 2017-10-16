$(document).ready(function(){
  $('.agitation-single-slider > .single-slider__slides').slick({
    arrows: false,
    dots: true,
    appendDots: $('.agitation-single-slider'),
    dotsClass: 'single-slider__btn-group',
    autoplay: true,
    autoplaySpeed: 3000
  });
});


$(window).ready(function() {
  if ( $(window).width() < 991 ) {
    $('.gifts__list').slick({
      arrows: false,
      dots: true,
      appendDots: $('.single-slider.gifts__slider'),
      dotsClass: 'single-slider__btn-group'
    });
  }
});

$(document).ready(function(){
  $('.staff__slider > .multi-slider__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.staff__slider'),
    prevArrow: '<button class="multi-slider__btn-left" type="button" name="button">&#8656;</button>',
    nextArrow: '<button class="multi-slider__btn-right" type="button" name="button">&#8656;</button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
      }
    }
    ]
  });
});

$(document).ready(function(){
  $('.service-content__slider > .multi-slider__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.service-content__slider'),
    prevArrow: '<button class="multi-slider__btn-left" type="button" name="button">&#8656;</button>',
    nextArrow: '<button class="multi-slider__btn-right" type="button" name="button">&#8656;</button>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('.service-content__slider'),
          dotsClass: 'single-slider__btn-group',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});
