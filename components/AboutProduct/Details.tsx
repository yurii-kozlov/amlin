import React, { ReactElement } from 'react';
import styles from 'styles/layout/AboutProduct/Details.module.scss';
import { Goods } from 'enums/goods';

type DetailsProps = {
  description: string
  productType: Goods
}

export const Details: React.FC<DetailsProps> = ({ description, productType }): ReactElement => {

  const getTheRightDetailsList = (productKind: Goods): string[] => {
    if (description) {
      switch (productKind) {
        case Goods.laptops:
          return description.split(';');

        case Goods.computers:
          return description.split('|');

        default:
          return description.split('\n');
      }
    }

    return description?.split(' ') as string[];
  }

  return (
    <ul className={styles.detailsList}>
      {getTheRightDetailsList(productType).map((detail) => (
        <li className={styles.detailsListItem} key={detail}>{detail}</li>
      ))}
    </ul>
  );
}
