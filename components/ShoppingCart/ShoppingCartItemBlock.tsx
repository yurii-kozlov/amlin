import React, { ReactElement } from 'react';
import cn from 'classnames';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { Product } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import { getTheRightProductTypelink } from 'helpers/getTheRightProductTypelink';
import styles from 'styles/layout/ShoppingCart/ShoppingCartItemBlock.module.scss';
import Link from 'next/link';

type ShoppingCartItemBlockProps = {
  product: Product
}

export const ShoppingCartItemBlock: React.FC<ShoppingCartItemBlockProps> = observer (
  ({ product }): ReactElement => {

  const {url, description, price, slug, name } = product;

  return (
    <li className={styles.cartProductListItem}>
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
            <span className={styles.quantity}>{personalAccount.productsQuantities[slug]}</span>
            <div className={styles.arrows}>
              <button
                aria-label="quantity-up"
                className={cn(styles.arrow, styles.arrowUp)}
                onClick={(): void => personalAccount.addProductQuantity(slug, price)}
                type="button"
              />
              <button
                aria-label="quantity-down"
                className={cn(styles.arrow, styles.arrowDown)}
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

