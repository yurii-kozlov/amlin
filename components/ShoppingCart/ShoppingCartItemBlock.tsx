import React, { ReactElement } from 'react';
import styles from 'styles/layout/ShoppingCart/ShoppingCartItemBlock.module.scss';
import cn from 'classnames';
import { MinicartBlock } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import personalAccount from 'store/personalAccount';
import { observer } from 'mobx-react';

type ShoppingCartItemBlockProps = {
  minicartBlock: MinicartBlock
}

export const ShoppingCartItemBlock: React.FC<ShoppingCartItemBlockProps> = observer (
  ({ minicartBlock }): ReactElement => {

  const {url, description, price, slug } = minicartBlock.productItem;

  return (
    <li className={styles.cartProductListItem}>
      <div className={styles.cartProductBlock}>
        <div className={styles.cartProductDescriptionAndImage}>
          <h3 className={cn(styles.subSectionTitle, styles.hiddenOnMobileAndTablet)}>Item</h3>
          <img alt={slug} className={styles.cartProductImage} src={url} />
          <p className={styles.cartProductDescription} >
            {description.split(' ').slice(0, 25).join(' ')}
          </p>
        </div>
        <div className={styles.cartProductPriceBlock}>
          <h3 className={styles.subSectionTitle}>Price</h3>
          <span className={styles.cartProductPrice}>${getTheRightPriceFormat(price)}.00</span>
        </div>
        <div className={styles.quantityBlockWrapper}>
          <h3 className={styles.subSectionTitle}>Qty</h3>
          <div className={styles.quantityBlock}>
            <span className={styles.quantity}>{minicartBlock.count}</span>
            <div className={styles.arrows}>
              <button
                aria-label="quantity-up"
                className={cn(styles.arrow, styles.arrowUp)}
                onClick={(): void => personalAccount.addProductQuantity(slug)}
                type="button"
              />
              <button
                aria-label="quantity-down"
                className={cn(styles.arrow, styles.arrowDown)}
                onClick={(): void => personalAccount.subtractProductQuantity(slug)}
                type="button"
              />
            </div>
          </div>
        </div>
        <span className={styles.subtotalBlock}>
          <h3 className={styles.subSectionTitle}>Subtotal</h3>
          <span className={styles.subtotal}>${getTheRightPriceFormat(minicartBlock.subtotal)}.00</span>
        </span>
        <div className={styles.userButtons} >
          <button
            aria-label='button-remove'
            className={cn(styles.buttons, styles.buttonRemove)}
            onClick={(): void => personalAccount.removeProduct(slug)}
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
