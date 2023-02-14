import React, { ReactElement } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { v4 as uuid_v4 } from 'uuid';
import cn from 'classnames';
import { Product } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat/getTheRightPriceFormat';
import { MinicartItem } from 'components/Minicart/MinicartItem';
import styles from 'styles/layout/Minicart/Minicart.module.scss';

type MinicartProps = {
  isMinicartVisible: boolean
}

export const Minicart: React.FC<MinicartProps> = observer (({ isMinicartVisible }): ReactElement => (
  <div
    className={cn(styles.block, {[styles.blockVisible]: isMinicartVisible})}
    data-testid="minicart"
  >
    <div className={styles.upperPart} >
      <h5 className={styles.title}>My Cart</h5>
      <span className={styles.itemsCount} >{personalAccount.totalCountOfAddedProducts} items in cart</span>
      <Link className={styles.buttonEditView} href="/shoppingCart">View or Edit Your Cart</Link>
    </div>
    <ul className={styles.list} >
      {personalAccount.cart.map((productItem: Product) => (
        <MinicartItem key={uuid_v4()} productItem={productItem} />
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
