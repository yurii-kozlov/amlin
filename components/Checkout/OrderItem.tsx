import React, { ReactElement } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { Product } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import { getTheRightProductTypelink } from 'helpers/getTheRightProductTypelink';
import styles from 'styles/layout/Checkout/OrderItem.module.scss';

type OrderItemProps = {
  product: Product
}

export const OrderItem: React.FC<OrderItemProps> = observer (({ product }): ReactElement => {
  const { url, price, name, slug } = product;

  return (
    <li className={styles.block} >
      <Link
        className={styles.name}
        href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
      >
        <img
          alt={name}
          className={styles.image}
          src={url}
       />
      </Link>
      <div className={styles.detailedInfo}>
        <Link
          className={styles.name}
          href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}
        >
          {name}
        </Link>
        <div className={styles.quantityAndPriceWrapper}>
          <span className={styles.quantity}>Qty
            <strong className={styles.quantityDigit}> {personalAccount.productsQuantities[slug]}</strong>
          </span>
          <span className={styles.price}>${getTheRightPriceFormat(price)}.00</span>
        </div>
      </div>
    </li>
  );
});
