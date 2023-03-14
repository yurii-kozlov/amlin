import React, { ReactElement } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { NewProducts as NewGoods } from 'types/main/NewProducts';
import { Container } from 'components/Container';
import { ProductCard } from 'components/ProductCard';
import { SampleNextArrow, SamplePrevArrow } from 'components/CarouselMain/Arrows';
import styles from 'styles/layout/NewProducts/NewProducts.module.scss';

type NewProductsProps = {
  newGoods: NewGoods
}
export const NewProducts: React.FC<NewProductsProps> = ({ newGoods }): ReactElement => {
  const { list: newProductsList } = newGoods;

  const settings = {
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


  return (
    <Container >
      <div className={styles.upperPart} >
        <h1 className={styles.title} >New Products</h1>
        <Link className={styles.allProductsLink} href="#">See All New Products</Link>
      </div>
      <div className={styles.section} >
        <Slider {...settings} >
          {newProductsList.map((product) => <ProductCard key={product.slug} product={product} />)}
        </Slider>
      </div>
    </Container>
  );
}
