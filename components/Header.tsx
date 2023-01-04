/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactElement, useState } from 'react';
import { Menu } from 'components/Menu';
import Image from 'next/image'
import styles from 'styles/layout/Header.module.scss';
import classes from 'styles/base/container.module.scss';
import Link from 'next/link';
import faceBookIcon from 'images/icons/facebook.svg';
import instagramIcon from 'images/icons/instagram.svg';
import personalAccount from 'store/personalAccount';
import { observer } from 'mobx-react';
import { Minicart } from 'components/Minicart/Minicart';
import cn from 'classnames';

export const Header:React.FC = observer((): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const [isMinicartVisible, setIsMinicartVisible] = useState<boolean>(false);

  const handleMenuVisibility = (): void => setIsMenuVisible(!isMenuVisible);
  const handleMinicartVisibility = (): void => setIsMinicartVisible(!isMinicartVisible);

  return (
    <header className={cn(styles.page, styles.pageMarginBottom)}>
      <div className={styles.menu}>
        <div className={styles.menuIcon1} />
      </div>
      <div className={styles.background_black}>
        <div className={classes.container} >
          <div className={styles.content} >
            <div className={styles.workingSchedule}>
              <span className={styles.workingDays}>Mon-Thu:{' '}</span>
              <span className={styles.workingHours}>9:00 AM - 5:30 PM</span>
              <i className={styles.arrow} />
            </div>
            <div className={styles.address}>
              <span className={styles.addressDetailed}>
                Visit our showroom in 1234 Street Adress City Address, 1234
                {' '}
              </span>
              <Link className={styles.contactUsLink} href="/contactUs">
                Contact Us
              </Link>
            </div>
            <div className={styles.contact}>
              <span className={styles.phoneNumber}>
                Call Us: (00) 1234 5678
              </span>
              <a
                className={styles.link}
                href="#">
                <Image
                  alt='facebook'
                  height={15}
                  src={faceBookIcon}
                  width={15}
                />
              </a>
              <a
                className={styles.link}
                href="#">
                <Image
                  alt='instagram'
                  height={15}
                  src={instagramIcon}
                  width={15}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.toggle}>
          <a
            className={styles.menuIcon}
            href="#"
          />

        </div>

        <div className={styles.searchBlock}>
          <div className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder='Search here'
            type="search"
          />
        </div>

        <div className={styles.basket}>
          <Minicart isMinicartVisible={isMinicartVisible} />
          <div className={styles.basketBlock}>
            {personalAccount.cart.length}
          </div>
          <a
            className={styles.basketLink}
            href="#"
            onClick={handleMinicartVisibility}
          />
        </div>

        <div className={styles.profile}>
          <Menu isMenuVisible={isMenuVisible} />
          <a
            className={styles.profileLink}
            href="#"
            onClick={handleMenuVisibility}
          />
          {isMenuVisible && <div className={styles.arrowTop} />}
        </div>
      </div>
    </header>
    );
});
