import React, { ReactElement } from 'react';
import styles from 'styles/layout/Minicart/MinicartItem.module.scss';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { Product} from 'types/main/Products';
import cn from 'classnames';

import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import Link from 'next/link';

type MinicartItemProps = {
  productItem: Product
}

export const MinicartItem: React.FC<MinicartItemProps> = observer(({ productItem: productItemBlock }): ReactElement => {
  const {url, name, slug} = productItemBlock;
  const linkPart = `${name.split(' ')[0].toLowerCase()}s`;

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemBlock} >
        <button
          aria-label='removeProduct'
          className={cn(styles.buttons, styles.buttonRemove)}
          onClick={(): void => personalAccount.removeProductFromCart(slug)}
          type="button"
        />
        <button
          aria-label='editProduct'
          className={cn(styles.buttons, styles.buttonEdit)}
          type="button"
        />
        <div className={styles.imageCountContainer} >
          <p className={styles.countOfProduct} >{personalAccount.productsQuantities[slug]}</p>
          <span className={styles.symbol} >x</span>
          <img
            alt="example"
            className={styles.productImage}
            src={url}
          />
        </div>
        <Link className={styles.productName} href={`/${linkPart}/${getTheRightProductNameLink(name)}`} >{name}</Link>
      </div>
    </li>
  )
});
