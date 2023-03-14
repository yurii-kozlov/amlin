import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import { v4 as uuid_v4 } from 'uuid'
import cn from 'classnames';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { OrderItem } from 'components/Checkout/OrderItem';
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import styles from 'styles/layout/Checkout/OrderSummary.module.scss';

export const OrderSummary: React.FC = observer((): ReactElement => {
  const [isProductsListVisible, setIsProductsListvisible] = useState<boolean>(false);

  const handleProductsListVisibility = (): void => setIsProductsListvisible(!isProductsListVisible);

  return (
    <div className={styles.section}>
      <div className={styles.summaryBlock} >
        <div className={styles.titleWrapper} >
          <h2 className={styles.title}>Order Summary</h2>
        </div>
        <button
          className={styles.itemsQuantity}
          data-testid="button-show-summary"
          onClick={handleProductsListVisibility}
          type="button"
        >
          {personalAccount.totalCountOfAddedProducts || 0}
          {personalAccount.totalCountOfAddedProducts > 1 ? ' items' : ' item'} in Cart
          {isProductsListVisible ? (
            <Image alt="arrowTop" className={styles.arrow} src={arrowTop}/>
          ) : (
            <Image alt="arrowDown" className={styles.arrow} src={arrowDown}/>
          )}
        </button>
        <ul
          className={cn(styles.list, {[styles.listVisible]: isProductsListVisible})}
          data-testid="list-with-products"
        >
          {personalAccount.cart.length > 0 ? (
            personalAccount.cart.map((product) => (
              <OrderItem key={uuid_v4()} product={product}/>
            ))
          ) : (
            <p className={styles.emptyShoppingCartDescription} data-testid="empty-cart-description" >
              Your Shopping Cart is Empty
            </p>
          )}
        </ul>
      </div>
    </div>
  );
});

