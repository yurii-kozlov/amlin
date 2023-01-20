import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { MinicartItem } from 'components/Minicart/MinicartItem';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { uuid } from 'uuidv4';
import { Product } from 'types/main/Products';
import styles from 'styles/layout/Minicart/Minicart.module.scss';

type MinicartProps = {
  isMinicartVisible: boolean
}

export const Minicart: React.FC<MinicartProps> = observer (({ isMinicartVisible }): ReactElement => (
  <div className={`${styles.block} ${isMinicartVisible && styles.blockVisible}`} >
    <div className={styles.upperPart} >
      <h5 className={styles.title}>My Cart</h5>
      <span className={styles.itemsCount} >{personalAccount.cart.length} items in cart</span>
      <Link className={styles.buttonEditView} href="/shoppingCart">View or Edit Your Cart</Link>
    </div>
    <ul className={styles.list} >
      {personalAccount.cart.map((productItem: Product) => (
        <MinicartItem key={uuid()} productItem={productItem} />
      ))}
    </ul>
    <div className={styles.lowerPart}>
      <span className={styles.totalPrice}>Subtotal:
        <span className={styles.priceInDigits}> ${getTheRightPriceFormat(personalAccount.totalOrderSum)}.00</span>
      </span>
      <Link className={styles.buttonCheckout} href="/shoppingCart/checkout">Go To Checkout</Link>
      <Link className={styles.buttonCheckoutPaypal} href="#" >Check out with</Link>
    </div>
  </div>
));
