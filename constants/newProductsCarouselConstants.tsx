import { SampleNextArrow, SamplePrevArrow } from 'components/CarouselMain/Arrows';

export const settingsOnDesktop = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '50px',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export const settingsOnTablet = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '30px',
  arrows: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export const settingsOnMobile = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '5px',
  arrows: false,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
