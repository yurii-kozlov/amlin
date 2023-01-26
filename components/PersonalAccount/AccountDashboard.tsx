import React, { ReactElement} from 'react';
import cn from 'classnames';
import { Profile } from 'types/profile/Profile';
import styles from 'styles/layout/PersonalAccount/AccountDashboard.module.scss';

type AccountDashboardProps = {
  profileInfo: Profile
}


export const AccountDashboard: React.FC<AccountDashboardProps> = ({ profileInfo }): ReactElement => {
  const {name, mail } = profileInfo;

  return  (
    <div className={styles.section} >
      <h2 className={cn(styles.blockTitle, styles.accountInformationSubtitle)}>Account Information</h2>
      <div className={styles.subBlocksWrapper} >
        <div className={styles.subBlock}>
          <h3 className={styles.subBlockTitle}>Contact Information</h3>
          <span className={styles.subBlockDescription}>{name}<br /> {mail}</span>
          <div className={styles.buttonsWrapper} >
            <button className={styles.subtitleButton} type="button">Edit</button>
            <button className={styles.subtitleButton} type="button">Change Password</button>
          </div>
        </div>
        <div className={styles.subBlock}>
          <h3 className={styles.subBlockTitle}>Newsletters</h3>
          <span className={styles.subBlockDescription}>You don&apos;t subscribe to our newsletter.</span>
          <button className={styles.subtitleButton} type="button">Edit</button>
        </div>
      </div>
      <div className={styles.subtitleAndButtonWrapper} >
        <h2 className={cn(styles.blockTitle, styles.addressBookSubtitle)}>Address Book</h2>
        <button className={styles.subtitleButton} type="button">Menage Address</button>
      </div>
      <div className={styles.subBlocksWrapper} >
        <div className={styles.block}>
          <div className={styles.subBlock}>
            <h3 className={styles.subBlockTitle}>Default Shipping Address</h3>
            <span className={styles.subBlockDescription}>You have not set a default shipping address.</span>
            <button className={styles.subtitleButton} type="button">Edit Address</button>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.subBlock}>
            <h3 className={styles.subBlockTitle}>Newsletters</h3>
            <span className={styles.subBlockDescription}>You have not set a default billing address.</span>
            <button className={styles.subtitleButton} type="button">Edit Address</button>
          </div>
        </div>
      </div>
    </div>
  );
}
