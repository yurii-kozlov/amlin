import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/layout/NewProducts.module.scss';
import { starRating } from 'helpers/starRating';
import { Product } from 'types/main/Products';

type Props = {
  product: Product
}

export const ProductScroll:React.FC<Props> = ({ product }): ReactElement => {
  const {
    inStock, slug, url, name, reviewsCount, previousPrice, rating, price
  } = product;

  return  (
    <div className={styles.section} >
      {inStock ? (
        <span className={`${styles.stockStatusSuccess} ${styles.stockStatus}`}>in stock</span>
        ): (
          <span className={`${styles.stockStatusFailure} ${styles.stockStatus}`}> check availability</span>
        ) }

      <div className={styles.imageContainer} >
        <img alt={slug} className={styles.image} src={url} />
      </div>
      <div className={styles.reviewSection}>
        {starRating(Math.round(rating))}
        <p className={styles.reviewInfo}>
          Reviews ({reviewsCount})
        </p>
      </div>
      <Link className={styles.productLink} href="#" >
        <p className={styles.productName}>{name}</p>
      </Link>
      <p className={styles.previousPrice}>${previousPrice}</p>
      <p className={styles.currentPrice}>${price}</p>
    </div>
  );
}
