import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import { uuid } from 'uuidv4';
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
          onClick={handleProductsListVisibility}
          type="button"
        >
          {personalAccount.cart.length || 0}
          {personalAccount.cart.length > 1 ? ' items' : ' item'} in Cart
          {isProductsListVisible ? (
            <Image alt="arrowTop" className={styles.arrow} src={arrowTop}/>
          ) : (
            <Image alt="arrowDown" className={styles.arrow} src={arrowDown}/>
          )}
        </button>
        <ul className={cn(styles.list, {[styles.listVisible]: isProductsListVisible})} >
          {personalAccount.cart.length > 0 ? (
            personalAccount.cart.map((product) => (
              <OrderItem key={uuid()} product={product}/>
            ))
          ) : (
            <p className={styles.emptyShoppingCartDescription}>Your Shopping Cart is Empty</p>
          )}
        </ul>
      </div>
    </div>
  );
});

