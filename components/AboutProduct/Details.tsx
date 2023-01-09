import React, { ReactElement } from 'react';
import styles from 'styles/layout/AboutProduct/Details.module.scss';
import { Goods } from 'enums/goods';

type DetailsProps = {
  description: string | undefined
  productType: Goods
}

export const Details: React.FC<DetailsProps> = ({ description, productType }): ReactElement => {
  // const listOfDetails = description?.split(';');
  const listOfDetails = productType === Goods.laptops
    ? description?.split(';')
    : description?.split('|');

  return (
    <ul className={styles.detailsList}>
      {listOfDetails?.map((detail) => (
        <li className={styles.detailsListItem} key={detail}>{detail}</li>
      ))}
    </ul>
  );
}
