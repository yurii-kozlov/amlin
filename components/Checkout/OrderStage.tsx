import React, { ReactElement } from 'react';
import cn from 'classnames';
import styles from 'styles/layout/Checkout/OrderStage.module.scss';

export const OrderStage: React.FC = (): ReactElement => (
  <div className={styles.block} >
    <div className={cn(styles.shippingStage, styles.shippingStageCompleted)}>
      <div className={cn(styles.stageIcon, styles.stageIconCompleted)} />
      <span className={cn(styles.stageLine, styles.stageLineCompleted)}/>
      <p className={cn(styles.stageDescription, styles.stageCompletedDescription)}>
        Shipping
      </p>
    </div>
    <div className={cn(styles.shippingStage, styles.shippingStageIncompleted)}>
      <div className={cn(styles.stageIcon, styles.stageIconIncompleted)}>2</div>
      <span className={cn(styles.stageLine, styles.stageLineIncompleted)}/>
      <p className={cn(styles.stageDescription, styles.stageIncompletedDescription)}>
        Review & Payments
      </p>
    </div>
  </div>
);
