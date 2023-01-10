import React, { ReactElement } from 'react';
import classes from 'styles/base/container.module.scss';
import styles from 'styles/layout/NewProducts.module.scss';
import { NewGoods } from 'types/main/NewProducts';
import { NewProduct } from 'components/NewProducts/NewProduct';
import Slider, { CustomArrowProps } from 'react-slick';
import styles1 from 'styles/layout/Carousel/CarouselMain.module.scss';
import Link from 'next/link';

const SampleNextArrow = (props:CustomArrowProps): ReactElement => {
  const { onClick } = props;

  return (
    <>
      <div
        className={` ${styles1.arrows} ${styles1.nextArrow}`}
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
      className={` ${styles1.arrows} ${styles1.prevArrow}`}
      onClick={onClick}
      role="presentation"
    />
  );
}

type Props = {
  newGoods: NewGoods
}
export const NewProducts: React.FC<Props> = ({ newGoods }): ReactElement => {
  const { list: newProductsList } = newGoods;

  const settingsOnDesktop = {
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

  const settingsOnTablet = {
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

  const settingsOnMobile = {
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

  return (
    <div className={classes.container} >
      <div className={`${styles1.section} ${styles1.onDesktop}`} >
        <div className={styles.upperPart} >
          <h1 className={styles.title} >New Products</h1>
          <Link className={styles.allProductsLink} href="#">See All New Products</Link>
        </div>

        <Slider {...settingsOnDesktop} >
          {newProductsList.map((product) => <NewProduct key={product.slug} newProduct={product} />)}
        </Slider>
      </div>

      <div className={`${styles1.section} ${styles1.onTablet}`} >
        <h1 className={styles.title} >New Products</h1>
        <Slider {...settingsOnTablet} >
          {newProductsList.map((product) => <NewProduct key={product.slug} newProduct={product} />)}
        </Slider>
      </div>

      <div className={`${styles1.section} ${styles1.onMobile}`} >
        <h1 className={styles.title} >New Products</h1>
        <Slider {...settingsOnMobile} >
          {newProductsList.map((product) => <NewProduct key={product.slug} newProduct={product} />)}
        </Slider>
      </div>
    </div>
  );
}
