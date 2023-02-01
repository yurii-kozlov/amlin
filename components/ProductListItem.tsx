import React, { ReactElement } from 'react';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import cn from 'classnames';
import { Product } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { getTheRightProductTypelink } from 'helpers/getTheRightProductTypelink';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import styles from 'styles/layout/ProductListItem.module.scss'

type ProductListItemProps = {
  product: Product
}

export const ProductListItem: React.FC<ProductListItemProps> = observer(({ product }): ReactElement => {
  const {
    inStock, url, name, description, reviewsCount, previousPrice, rating, price
  } = product;

  const colorYellow = '#E9A426';

  const addToCart = (productBlock: Product): void =>personalAccount.addProductToCart(productBlock);
  const addToWishList = (productBlock: Product): void => personalAccount.addProductToWishList(productBlock);

  return(
    <div className={styles.block}>
      <div className={styles.imageAndReviewsWrapper}>
        <Link className={styles.linkOnImage}
          href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
          >
          <img
            alt={name}
            className={styles.image}
            src={url}
      />
        </Link>
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
      </div>
      <div className={styles.detailedInfoAndFeaturesWrapper}>
        <div className={styles.detailedInfo} >
          <Link
            className={styles.name}
            href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
          >
            {name}
          </Link>
          <div className={styles.featuresAndDescriptionWrapper} >
            <p className={styles.description}>
              {description.split(' ').slice(0, 20).join(' ')}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemFeature}>CPU</span>
                <span className={styles.availability}>N/A</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemFeature}>Featured</span>
                <span className={styles.availability}>N/A</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemFeature}>I/O Ports</span>
                <span className={styles.availability}>N/A</span>
              </li>
            </ul>
          </div>
          <div className={styles.priceblock}>
            <p className={styles.previousPrice}>${getTheRightPriceFormat(previousPrice)}.00</p>
            <p className={styles.currentPrice}><strong>${getTheRightPriceFormat(price)}.00</strong></p>
          </div>
          <button
            className={styles.buttonAddToCard}
            onClick={(): void => addToCart(product)}
            type="button"
            >
            Add to Cart
          </button>
        </div>
      </div>
      <div className={styles.buttonsAndInStockWrapper} >
        {inStock ? (
          <span className={cn(styles.stockStatusSuccess, styles.stockStatus)}>in stock</span>
        ): (
          <span className={cn(styles.stockStatusFailure, styles.stockStatus)}> check availability</span>
        )}
        <ul className={styles.userButtonsList}>
          <li className={styles.userButtonsListItem}>
            <button
              aria-label='wishList'
              className={cn(styles.userButtons, styles.addToWishListButton)}
              onClick={(): void => addToWishList(product)}
              type="button"
            />
          </li>
          <li className={styles.userButtonsListItem}>
            <button
              aria-label='statistics'
              className={cn(styles.userButtons, styles.statisticsButton)}
              type="button"
            />
          </li>
          <li className={styles.userButtonsListItem}>
            <button
              aria-label='email'
              className={cn(styles.userButtons, styles.emailButton)}
              type="button"
            />
          </li>
        </ul>
      </div>
    </div>
    );
});
