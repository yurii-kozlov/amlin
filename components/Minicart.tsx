import React, { ReactElement } from 'react';
import styles from 'styles/layout/Minicart.module.scss';

type Props = {
  isMinicartVisible: boolean
}

export const Minicart: React.FC<Props> = ({ isMinicartVisible }): ReactElement => (
  <div className={`${styles.block} ${isMinicartVisible && styles.blockVisible}`} >
    <div className={styles.upperPart} >
      <h5 className={styles.title}>My Cart</h5>
      <span className={styles.itemsCount} >2 item in cart</span>
      <button className={styles.buttonEdit} type="button">View or Edit Your Cart</button>
    </div>
    <ul className={styles.list} >
      <li className={styles.listItem}>
        <div className={styles.listItemBlock} >
          <div className={styles.imageCountContainer} >
            <p className={styles.countOfProduct} >1</p>
            <span className={styles.symbol} >x</span>
            <img
              alt="example"
              className={styles.productImage}
              src="https://res.cloudinary.com/dqdonqby4/image/upload/v1612528866/new-products/9_uhvi0t.jpg" />
          </div>
          <p className={styles.productName}>Laptop Mi Notebook Lite 15 I5/8/512/MX110/W (JYU4139CN)</p>
        </div>
      </li>
      <li className={styles.listItem}>
        <div className={styles.listItemBlock} >
          <div className={styles.imageCountContainer} >
            <p className={styles.countOfProduct} >1</p>
            <span className={styles.symbol} >x</span>
            <img
              alt="example"
              className={styles.productImage}
              src="https://res.cloudinary.com/dqdonqby4/image/upload/v1612528866/new-products/9_uhvi0t.jpg" />
          </div>
          <p className={styles.productName}>Laptop Mi Notebook Lite 15 I5/8/512/MX110/W (JYU4139CN)</p>
        </div>
      </li>
      <li className={styles.listItem}>
        <div className={styles.listItemBlock} >
          <div className={styles.imageCountContainer} >
            <p className={styles.countOfProduct} >1</p>
            <span className={styles.symbol} >x</span>
            <img
              alt="example"
              className={styles.productImage}
              src="https://res.cloudinary.com/dqdonqby4/image/upload/v1612528866/new-products/9_uhvi0t.jpg" />
          </div>
          <p className={styles.productName}>Laptop Mi Notebook Lite 15 I5/8/512/MX110/W (JYU4139CN)</p>
        </div>
      </li>
    </ul>
    <div className={styles.lowerPart}>
      <span className={styles.totalPrice}>Subtotal: $499.00</span>
      <button className={styles.buttonCheckout} type="button">Go to checkout</button>
      <button className={styles.buttonCheckoutPaypal} type="button">Checkout with Paypal</button>
    </div>
  </div>
)