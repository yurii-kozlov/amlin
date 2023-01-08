import React, { ReactElement } from 'react';
import styles from 'styles/layout/AboutProduct/Details.module.scss';

type DetailsProps = {
  description: string | undefined
}

export const Details: React.FC<DetailsProps> = ({ description }): ReactElement => {
  const listOfDetails = description?.split(';');

  return (
    <ul className={styles.detailsList}>
      {listOfDetails?.map((detail) => (
        <li className={styles.detailsListItem} key={detail}>{detail}</li>
      ))}
    </ul>
  );
}
