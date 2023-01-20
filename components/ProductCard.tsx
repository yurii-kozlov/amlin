import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/layout/ProductCard.module.scss';
import { Product } from 'types/main/Products';
import personalAccount from 'store/personalAccount';
import { observer } from 'mobx-react';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import cn from 'classnames';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import StarRatings from 'react-star-ratings';

type addToCartProps = {
  product: Product,
  productType?: string
}

export const addToCart = (product: Product): void => {
  if (product !== null) {
    personalAccount.addProductToCart(product);
  }
}

const addToWishList = (product: Product): void => {
  personalAccount.addProductToWishList(product);
}

export const ProductCard:React.FC<addToCartProps> = observer (({ product, productType }): ReactElement => {
  const {
    inStock, slug, url, name, reviewsCount, previousPrice, rating, price
  } = product;

  const colorYellow = '#E9A426';
  const linkPart = productType || `${name.split(' ')[0].toLowerCase()}s`;

  return (
    <div className={styles.section} >
      <button
        aria-label='wishList'
        className={cn(styles.upperButtons, styles.addToWishListButton)}
        onClick={(): void => addToWishList(product)}
        type="button"
      />
      <button aria-label='statistics' className={cn(styles.upperButtons, styles.statisticsButton)} type="button" />
      {inStock ? (
        <span className={cn(styles.stockStatusSuccess, styles.stockStatus)}>in stock</span>
        ): (
          <span className={cn(styles.stockStatusFailure, styles.stockStatus)}> check availability</span>
        ) }

      <div className={styles.imageContainer} >
        <img alt={slug} className={styles.image} src={url} />
      </div>
      <div className={styles.reviewSection}>
        <div className={styles.starsWrapper} >
          <StarRatings
            name="rating"
            numberOfStars={5}
            rating={rating}
            starDimension="12px"
            starRatedColor={colorYellow}
            starSpacing="1px"
          />
        </div>
        <p className={styles.reviewInfo}>
          Reviews ({reviewsCount})
        </p>
      </div>
      <Link className={styles.productLink} href={`/${linkPart}/${getTheRightProductNameLink(name)}`} >
        <p className={styles.productName}>{name}</p>
      </Link>
      <p className={styles.previousPrice}>${getTheRightPriceFormat(previousPrice)}.00</p>
      <p className={styles.currentPrice}>${getTheRightPriceFormat(price)}.00</p>
      <div className={styles.buttonBlock} >
        <button
          className={styles.buttonAddToCard}
          onClick={() : void => addToCart(product)}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});
