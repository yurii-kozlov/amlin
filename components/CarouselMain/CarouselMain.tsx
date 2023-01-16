import React, { ReactElement } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import styles from 'styles/layout/Carousel/CarouselMain.module.scss';
import { Container } from 'components/Container';
import { CarouselMainBlock } from 'components/CarouselMain/CarouselMainBlock';
import { Banner } from 'types/main/Banner';

const SampleNextArrow = (props:CustomArrowProps): ReactElement => {
  const { onClick } = props;

  return (
    <>
      <div
        className={` ${styles.arrows} ${styles.nextArrow}`}
        onClick={onClick}
        role="presentation"
      />
    </>

  );
}

function SamplePrevArrow(props:CustomArrowProps): ReactElement {
  const { onClick } = props;

  return (
    <div
      className={` ${styles.arrows} ${styles.prevArrow}`}
      onClick={onClick}
      role="presentation"
    />
  );
}

type Props = {
  banners: Banner[]
}

export const CarouselMain: React.FC<Props> = ({ banners }):ReactElement => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Container>
      <div className={`${styles.section} ${styles.bigBanner}`} >
        <Slider {...settings}>
          {banners.map((banner) => (<CarouselMainBlock banner={banner} key={banner.id} />))}
        </Slider>
      </div>
    </Container>
  );
}
