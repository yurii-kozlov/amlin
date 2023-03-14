import React, { ReactElement } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { Product } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat/getTheRightPriceFormat';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink/getTheRightProductNameLink';
import { getTheRightProductTypelink } from 'helpers/getTheRightProductTypeLink/getTheRightProductTypelink';
import styles from 'styles/layout/ShoppingCart/ShoppingCartItemBlock.module.scss';
import Link from 'next/link';

type ShoppingCartItemBlockProps = {
  product: Product
}

export const ShoppingCartItemBlock: React.FC<ShoppingCartItemBlockProps> = observer (
  ({ product }): ReactElement => {

  const {url, description, price, slug, name } = product;

  return (
    <li className={styles.cartProductListItem} data-testid="shoppingCart-item">
      <div className={styles.cartProductBlock}>
        <div className={styles.cartProductDescriptionAndImage}>
          <h3 className={cn(styles.subSectionTitle, styles.hiddenOnMobileAndTablet)}>Item</h3>
          <Link
            className={styles.cartProductDescription}
            href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
          >
            <img alt={slug} className={styles.cartProductImage} src={url} />
          </Link>
          <Link
            className={styles.cartProductDescription}
            href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
          >
            {description.split(' ').slice(0, 25).join(' ')}
          </Link>
        </div>
        <div className={styles.cartProductPriceBlock}>
          <h3 className={styles.subSectionTitle}>Price</h3>
          <span className={styles.cartProductPrice}>${getTheRightPriceFormat(price)}.00</span>
        </div>
        <div className={styles.quantityBlockWrapper}>
          <h3 className={styles.subSectionTitle}>Qty</h3>
          <div className={styles.quantityBlock}>
            <span
              className={styles.quantity}
              data-testid={`product-item-${slug}`}
            >
              {personalAccount.productsQuantities[slug]}
            </span>
            <div className={styles.arrows}>
              <button
                aria-label="quantity-up"
                className={cn(styles.arrow, styles.arrowUp)}
                data-testid={`button-ad-product-quantity-${slug}`}
                onClick={(): void => personalAccount.addProductQuantity(slug, price)}
                type="button"
              />
              <button
                aria-label="quantity-down"
                className={cn(styles.arrow, styles.arrowDown)}
                data-testid={`button-subtract-product-quantity-${slug}`}
                onClick={(): void => personalAccount.subtractProductQuantity(slug, price)}
                type="button"
              />
            </div>
          </div>
        </div>
        <span className={styles.subtotalBlock}>
          <h3 className={styles.subSectionTitle}>Subtotal</h3>
          <span className={styles.subtotal}>${getTheRightPriceFormat(personalAccount.productsSums[slug])}.00</span>
        </span>
        <div className={styles.userButtons} >
          <button
            aria-label='button-remove'
            className={cn(styles.buttons, styles.buttonRemove)}
            data-testid={`button-remove-product-${slug}`}
            onClick={(): void => personalAccount.removeProductFromCart(slug)}
            type="button"
          />
          <button
            aria-label='button-edit'
            className={cn(styles.buttons, styles.buttonEdit)}
            type="button"
          />
        </div>
      </div>
    </li>
  )
})

