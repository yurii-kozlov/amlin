import React, { ReactElement } from 'react';
import { Product } from 'types/main/Products';
import { getTheRightPriceFormat } from 'helpers/getTheRightPriceFormat';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import styles from 'styles/layout/Checkout/OrderItem.module.scss';
import personalAccount from 'store/personalAccount';
import Link from 'next/link';

type OrderItemProps = {
  product: Product
}

export const OrderItem: React.FC<OrderItemProps> = ({ product }): ReactElement => {
  const {url, price, name, slug } = product;

  const linkPart = `${name.split(' ')[0].toLowerCase()}s`;

  return (
    <li className={styles.block} >
      <img
        alt={name}
        className={styles.image}
        src={url}
       />
      <div className={styles.detailedInfo}>
        <Link
          className={styles.name}
          href={`/${linkPart}/${getTheRightProductNameLink(name)}`}
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
}
