import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { Product } from 'types/main/Products';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink/getTheRightProductNameLink';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat/getTheRightPriceFormat';
import { getTheRightProductTypelink } from 'helpers/getTheRightProductTypeLink/getTheRightProductTypelink';
import styles from 'styles/layout/ProductCard.module.scss';

type addToCartProps = {
  product: Product
}

export const addToCart = (product: Product): void => {
  if (product) {
    personalAccount.addProductToCart(product);
  }
}

const addToWishList = (product: Product): void => {
  personalAccount.addProductToWishList(product);
}

export const ProductCard:React.FC<addToCartProps> = observer (({ product}): ReactElement => {
  const {
    inStock, slug, url, name, reviewsCount, previousPrice, rating, price
  } = product;

  const StarRatings = dynamic(() => import('react-star-ratings'), {
    ssr: false,
  })

  const colorYellow = '#E9A426';

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
        <Link
          className={styles.productLinkOnImage}
          href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
        >
          <Image
            alt={slug}
            className={styles.image}
            height={130}
            src={url}
            width={180}
          />
        </Link>
      </div>
      <div className={styles.reviewSection}>
        <div className={styles.starsWrapper} >
          <StarRatings
            name="rating"
            numberOfStars={5}
            rating={rating}
            starDimension="12px"
            starRatedColor={colorYellow}
            starSpacing="0"
            />
        </div>
        <p className={styles.reviewInfo}>
          Reviews ({reviewsCount})
        </p>
      </div>
      <Link
        className={styles.productLink}
        href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
        >
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
