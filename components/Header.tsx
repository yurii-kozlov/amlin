import React, { ReactElement, useState } from 'react';
import { Menu } from 'components/Menu';
import Image from 'next/image'
import styles from 'styles/Header.module.scss';
import Link from 'next/link';
import cn from 'classnames';

export const Header:React.FC = (): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleMenuVisibility = (): void => setIsMenuVisible(!isMenuVisible);

  return (
    <header className={cn(styles.page, styles.pageMarginBottom)}>
      <div className={styles.menu}>
        <div className={styles.menuIcon1} />
      </div>
      <div className={styles.background_black}>
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
                src='https://res.cloudinary.com/docve4syp/image/upload/v1670596201/techstore/facebook_nssaki.webp'
                width={15}
              />
            </a>
            <a
              className={styles.link}
              href="#">
              <Image
                alt='facebook'
                height={15}
                src='https://res.cloudinary.com/docve4syp/image/upload/v1670593105/techstore/instagram_uli9xn.webp'
                width={15}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.toggle}>
          <button
            aria-label="menu"
            className={styles.menuButton}
            type="button"
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

        <div className={styles.minicart}>
          <div className={styles.minicartBlock}>
            2
          </div>
          <button
            aria-label="minicart"
            className={styles.minicartButton}
            type="button"
          />
        </div>

        <div className={styles.profile}>
          <Menu isMenuVisible={isMenuVisible} />
          <button
            aria-label="profile"
            className={styles.profileButton}
            onClick={handleMenuVisibility}
            type="button"
          />
          {isMenuVisible && <div className={styles.arrowTop} />}
        </div>
      </div>
    </header>
    );
}
