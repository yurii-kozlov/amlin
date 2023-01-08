import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/layout/NewProducts.module.scss';
import { starRating } from 'helpers/starRating';
import { Product } from 'types/main/Products';
import personalAccount from 'store/personalAccount';
import { observer } from 'mobx-react';
import cn from 'classnames';

type addToCardProps = {
  product: Product,
  productType: string
}

export const addToCard = (product: Product): void => {
  personalAccount.addProduct(product);
}

export const ProductScroll:React.FC<addToCardProps> = observer (({ product, productType }): ReactElement => {
  const {
    inStock, slug, url, name, reviewsCount, previousPrice, rating, price
  } = product;

  return (
    <div className={styles.section} >
      <button aria-label='wishList' className={cn(styles.upperBottoms, styles.addToWishListBottom)} type="button" />
      <button aria-label='statistics' className={cn(styles.upperBottoms, styles.statisticsBottom)} type="button" />
      {inStock ? (
        <span className={cn(styles.stockStatusSuccess, styles.stockStatus)}>in stock</span>
        ): (
          <span className={cn(styles.stockStatusFailure, styles.stockStatus)}> check availability</span>
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
      <Link className={styles.productLink} href={`/${productType}/${name}`} >
        <p className={styles.productName}>{name}</p>
      </Link>
      <p className={styles.previousPrice}>${previousPrice}</p>
      <p className={styles.currentPrice}>${price}</p>
      <div className={styles.buttonBlock} >
        <button
          className={styles.buttonAddToCard}
          onClick={() : void => addToCard(product)}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
})
