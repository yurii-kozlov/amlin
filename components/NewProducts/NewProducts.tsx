import React, { ReactElement } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import cn from 'classnames';
import { NewProducts as NewGoods } from 'types/main/NewProducts';
import { settingsOnDesktop, settingsOnTablet, settingsOnMobile } from 'constants/newProductsCarouselConstants';
import { Container } from 'components/Container';
import { ProductCard } from 'components/ProductCard';
import styles from 'styles/layout/NewProducts/NewProducts.module.scss';

type NewProductsProps = {
  newGoods: NewGoods
}
export const NewProducts: React.FC<NewProductsProps> = ({ newGoods }): ReactElement => {
  const { list: newProductsList } = newGoods;

  return (
    <Container >
      <div className={cn(styles.section, styles.onDesktop)} >
        <div className={styles.upperPart} >
          <h1 className={styles.title} >New Products</h1>
          <Link className={styles.allProductsLink} href="#">See All New Products</Link>
        </div>
        <Slider {...settingsOnDesktop} >
          {newProductsList.map((product) => <ProductCard key={product.slug} product={product} />)}
        </Slider>
      </div>

      <div className={cn(styles.section, styles.onTablet)} >
        <h1 className={styles.title}>New Products</h1>
        <Slider {...settingsOnTablet} >
          {newProductsList.map((product) => <ProductCard key={product.slug} product={product} />)}
        </Slider>
      </div>

      <div className={cn(styles.section, styles.onMobile)}>
        <h1 className={styles.title} >New Products</h1>
        <Slider {...settingsOnMobile} >
          {newProductsList.map((product) => <ProductCard key={product.slug} product={product} />)}
        </Slider>
      </div>
    </Container>
  );
}
