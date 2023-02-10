import { SampleNextArrow, SamplePrevArrow } from 'components/CarouselMain/Arrows';

export const settings = {
  dots: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  slidesToShow: 5,
  lazyload: true,
  slidesToScroll: 2,
  className: styles.sliderBlock,
  centerMode: false,
  responsive: [
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
        centerPadding: '40px',
        arrows: false
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        centerPadding: '5px',
        arrows: false
      }
    },
    {
      breakpoint: 545,
      settings: {
        slidesToShow: 2,
        arrows: false,
        variableWidth: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        centerPadding: '30px',
        arrows: false,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 3,
        centerPadding: '10px',
        arrows: false,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 4,
      }
    }
  ],
  centerPadding: '50px',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
