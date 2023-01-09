/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/layout/Minicart.module.scss';
import { observer } from 'mobx-react';
import { MinicartItem } from 'components/Minicart/MinicartItem';
import personalAccount from 'store/personalAccount';
import { uuid } from 'uuidv4';
import { MinicartBlock } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';

type Props = {
  isMinicartVisible: boolean
}

export const Minicart: React.FC<Props> = observer (({ isMinicartVisible }): ReactElement => (
  <div className={`${styles.block} ${isMinicartVisible && styles.blockVisible}`} >
    <div className={styles.upperPart} >
      <h5 className={styles.title}>My Cart</h5>
      <span className={styles.itemsCount} >{personalAccount.cart.length} items in cart</span>
      <button className={styles.buttonEditView} type="button">View or Edit Your Cart</button>
    </div>
    <ul className={styles.list} >
      {personalAccount.cart.map((productItemBlock: MinicartBlock) => (
        <MinicartItem key={uuid()} productItemBlock={productItemBlock} />
      ))}
    </ul>
    <div className={styles.lowerPart}>
      <span className={styles.totalPrice}>Subtotal:
        <span className={styles.priceInDigits}> ${getTheRightPriceFormat(personalAccount.totalPrice)}.00</span>
      </span>
      <Link className={styles.buttonCheckout} href="#" type="button">Go To Checkout</Link>
      <Link className={styles.buttonCheckoutPaypal} href="#" type="button">Check out with</Link>
    </div>
  </div>
));
