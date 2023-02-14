import React, { ReactElement } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount'
import { Product} from 'types/main/Products';
import cn from 'classnames';
import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink/getTheRightProductNameLink';
import { getTheRightProductTypelink } from 'helpers/getTheRightProductTypeLink/getTheRightProductTypelink';
import styles from 'styles/layout/Minicart/MinicartItem.module.scss';

type MinicartItemProps = {
  productItem: Product
}

export const MinicartItem: React.FC<MinicartItemProps> = observer(({ productItem: productItemBlock }): ReactElement => {
  const {url, name, slug} = productItemBlock;

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
        <div className={styles.imageCountContainer}>
          <p className={styles.countOfProduct}>{personalAccount.productsQuantities[slug]}</p>
          <span className={styles.symbol}>x</span>
          <Link
            className={styles.productName}
            href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}>
            <img
              alt="example"
              className={styles.productImage}
              src={url}
          />
          </Link>

        </div>
        <Link
          className={styles.productName}
          href={`/${getTheRightProductTypelink(name)}/${getTheRightProductNameLink(name)}`}>
          {name}
        </Link>
      </div>
    </li>
  )
});
