import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import styles from 'styles/layout/Carousel/CarouselMain.module.scss';
import { Container } from 'components/Container';
import { CarouselMainBlock } from 'components/CarouselMain/CarouselMainBlock';
import { Banner } from 'types/main/Banner';
import cn from 'classnames';
import { carouselMainSettings } from 'constants/carouselMainConstants';


type CarouselMainProps = {
  banners: Banner[]
}

export const CarouselMain: React.FC<CarouselMainProps> = ({ banners }):ReactElement => (
  <Container>
    <div className={cn(styles.section, styles.bigBanner)} >
      <Slider {...carouselMainSettings}>
        {banners.map((banner) => (<CarouselMainBlock banner={banner} key={banner.id} />))}
      </Slider>
    </div>
  </Container>
  );
