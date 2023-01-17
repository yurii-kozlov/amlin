
import React, { ReactElement } from 'react';
import styles from 'styles/layout/Minicart.module.scss';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { MinicartBlock } from 'types/main/Products';
import cn from 'classnames';

import { getTheRightProductNameLink } from 'helpers/getTheRightProductNameLink';
import Link from 'next/link';

type MinicartItemProps = {
  productItemBlock: MinicartBlock
}

export const MinicartItem: React.FC<MinicartItemProps> = observer(({ productItemBlock }): ReactElement => {
  const {url, name, slug} = productItemBlock.productItem;
  const linkPart = `${name.split(' ')[0].toLowerCase()}s`;

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemBlock} >
        <button
          aria-label='removeProduct'
          className={cn(styles.buttons, styles.buttonRemove)}
          onClick={(): void => personalAccount.removeProduct(slug)}
          type="button"
        />
        <button
          aria-label='editProduct'
          className={cn(styles.buttons, styles.buttonEdit)}
          type="button"
        />
        <div className={styles.imageCountContainer} >
          <p className={styles.countOfProduct} >{productItemBlock.count}</p>
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
