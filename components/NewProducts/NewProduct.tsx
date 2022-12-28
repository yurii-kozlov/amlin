/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/layout/NewProducts.module.scss';
import { starRating } from 'helpers/starRating';
import { NewProduct } from 'types/main/NewProducts';
import { addToCard } from 'components/ProductsScroll/ProductScroll';

type Props = {
  newProduct: NewProduct
}

export const NewsProduct:React.FC<Props> = ({ newProduct }): ReactElement => {
  const {
    inStock, slug, url, name, reviewsCount, previousPrice, rating, price
  } = newProduct;

  return  (
    <div className={styles.section} >
      <button className={`${styles.upperBottoms} ${styles.addToWishListBottom}`} type="button" />
      <button className={`${styles.upperBottoms} ${styles.statisticsBottom}`} type="button" />
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
      <Link className={styles.productLink} href="#">
        <p className={styles.productName}>{name}</p>
      </Link>
      <p className={styles.previousPrice}>${previousPrice}</p>
      <p className={styles.currentPrice}>${price}</p>
      <div className={styles.buttonBlock} >
        <button
          className={styles.buttonAddToCard}
          onClick={() : void => addToCard(newProduct)}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
