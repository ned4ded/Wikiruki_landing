const replaceAnim = (elemClassName, elemActiveName, elemBackName, animDelay, animName = 'replace') => {

  console.log('anim begin');

  const elementsList = () => $(`.${elemClassName}`);
  const activeElements = () => $(`.${elemActiveName}`);

  if(activeElements().length === 0 || $(`.${elemBackName}`).length === 0) {
    return;
  }

  if(elementsList().not(activeElements()).length === 0) {
    activeElements()
      .clone()
      .appendTo(activeElements().parent());

    const deactivateElements = () => activeElements().eq(2);

    while(deactivateElements().length !== 0) {
      deactivateElements().removeClass(`${elemActiveName} ${elemBackName}`);
    }
  }

  var curIndex = 2;
  var elementsHovered = false;

  elementsList().parent().hover(function() {
    (elementsHovered) ? elementsHovered = false : elementsHovered = true;
  });

  const animDuration = $(`.${animName}`).css('animation-duration').match(/\d/) * 1000;
  const anim = () => setTimeout(function() {
    if(elementsHovered) {
      return anim();
    } else {
      $(`.${elemActiveName}.${animName}:not(.${elemBackName})`).addClass('out');
      $(`.${elemActiveName}.${animName}.${elemBackName}`).addClass('in');

      elementsList()
        .eq(curIndex)
        .addClass(`${elemActiveName} ${elemBackName} fraud`);

      curIndex = (curIndex === elementsList().length - 1) ? 0 : curIndex + 1;

      setTimeout(function() {

        $(`.${elemActiveName}.${animName}.fraud`).removeClass(`fraud`);
        $(`.${elemActiveName}.${animName}.out`).removeClass(`out ${elemActiveName}`);
        $(`.${elemActiveName}.${animName}.in`).removeClass(`in ${elemBackName}`);

        anim();
      }, animDuration);
    }
  }, animDelay);

  anim();
}

const longestWord = (words) => {
  return words.reduce((acc, word) => {
    if(!(typeof(word) === 'string')) {
      return;
    }

    const wordLength = word.length;

    return (acc < wordLength)? wordLength : acc;
  }, 0);
}

$(document).ready(function(){
  $('.agitation-single-slider > .single-slider__slides').slick({
    arrows: false,
    dots: true,
    appendDots: $('.agitation-single-slider'),
    dotsClass: 'single-slider__btn-group',
    autoplay: true,
    autoplaySpeed: 3000
  });

  if( $(window).width() < 991 ) {
    $('.gifts__list').slick({
      arrows: false,
      dots: true,
      appendDots: $('.single-slider.gifts__slider'),
      dotsClass: 'single-slider__btn-group'
    });
  }

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

  $('.service-content__slider > .multi-slider__slides').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
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

// Main-info instruction slider
  replaceAnim('main-info__instruction', 'main-info__instruction--active', 'instruction--backwards', 3000);
});
