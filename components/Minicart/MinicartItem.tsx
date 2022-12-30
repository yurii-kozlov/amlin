/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactElement } from 'react';
import styles from 'styles/layout/Minicart.module.scss';
// import { Product } from 'types/main/Products';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import { MinicartBlock } from 'types/main/Products';

type MinicartItemProps = {
  productItemBlock: MinicartBlock
}

export const MinicartItem: React.FC<MinicartItemProps> = observer(({ productItemBlock }): ReactElement => {
  const {url, name, slug} = productItemBlock.productItem;

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemBlock} >
        <button
          className={`${styles.buttons} ${styles.buttonRemove}`}
          onClick={(): void => personalAccount.removeProduct(slug)}
          type="button"
        />
        <button className={`${styles.buttons} ${styles.buttonEdit}`} type="button" />
        <div className={styles.imageCountContainer} >
          <p className={styles.countOfProduct} >{productItemBlock.count}</p>
          <span className={styles.symbol} >x</span>
          <img
            alt="example"
            className={styles.productImage}
            src={url}
          />
        </div>
        <p className={styles.productName}>{name}</p>
      </div>
    </li>
  )
});
