
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/layout/NewProducts.module.scss';
import { starRating } from 'helpers/starRating';
import { Product as NewGood } from 'types/main/Products';
import { addToCard } from 'components/ProductsScroll/ProductScroll';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';

type Props = {
  newProduct: NewGood
}

export const NewProduct:React.FC<Props> = ({ newProduct }): ReactElement => {
  const {
    inStock, slug, url, name, reviewsCount, previousPrice, rating, price,
  } = newProduct;

  const linkPart = `${name.split(' ')[0].toLowerCase()}s`;

  return (
    <div className={styles.section} >
      <button aria-label='wish-list' className={`${styles.upperBottoms} ${styles.addToWishListBottom}`} type="button" />
      <button aria-label='wish-list' className={`${styles.upperBottoms} ${styles.statisticsBottom}`} type="button" />
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
      <Link className={styles.productLink} href={`/${linkPart}/${getTheRightProductNameLink(name)}`}>
        <p className={styles.productName}>{name}</p>
      </Link>
      <p className={styles.previousPrice}>${getTheRightPriceFormat(previousPrice)}.00</p>
      <p className={styles.currentPrice}>${getTheRightPriceFormat(price)}.00</p>
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
