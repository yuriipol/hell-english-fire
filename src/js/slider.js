import $ from 'jquery';
import slick from 'slick-carousel';

$('.slider__item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: false,
  asNavFor: '.slider__pagination',
  mobileFirst: true,
  prevArrow: $('.slider__btn--prev'),
  nextArrow: $('.slider__btn--next'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
      },
    },
  ],
});

$('.slider__pagination').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider__item',
  dots: false,
  infinite: false,
  focusOnSelect: true,
  mobileFirst: true,
  prevArrow: $('.slider__btn--prev'),
  nextArrow: $('.slider__btn--next'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        arrows: false,
      },
    },
  ],
});
