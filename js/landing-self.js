$(document).ready(function(){
  $('.agitation-single-slider > .single-slider__slides').slick({
    arrows: false,
    dots: true,
    appendDots: $('.agitation-single-slider'),
    dotsClass: 'single-slider__btn-group',
  });
});


$(window).ready(function() {
  if ( $(window).width() < 991 ) {
    giftsSliderActivation();
  }
});

const giftsSliderActivation = () => {
  $('.gifts__list').slick({
    arrows: false,
    dots: true,
    appendDots: $('.single-slider.gifts__slider'),
    dotsClass: 'single-slider__btn-group'
  });
}
