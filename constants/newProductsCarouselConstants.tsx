import { SampleNextArrow, SamplePrevArrow } from 'components/CarouselMain/Arrows';

export const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
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
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        centerPadding: '30px',
        arrows: false
      }
    },
    {
      breakpoint: 1090,
      settings: {
        slidesToShow: 3,
        centerPadding: '50px',
        arrows: false
      }
    }
  ],
  centerPadding: '50px',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
