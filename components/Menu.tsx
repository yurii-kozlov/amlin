import React, { ReactElement } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import personalAccount from 'store/personalAccount';
import styles from 'styles/layout/Menu.module.scss';

type MenuProps = {
  isMenuVisible: boolean
}

export const Menu: React.FC<MenuProps> = observer(({ isMenuVisible }): ReactElement => (
  <div className={`${styles.section} ${isMenuVisible && styles.visible}`} >
    <ul className={styles.list} >
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="/personalAccount" >
          My Account
        </Link>
      </li>
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="#" >
          My Wish List ({personalAccount.wishList.length})
        </Link>
      </li>
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="#" >
          Compare (0)
        </Link>
      </li>
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="/register" >
          Create an account
        </Link>
      </li>
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="/register" >
          Sign in
        </Link>
      </li>
    </ul>
  </div>
));
