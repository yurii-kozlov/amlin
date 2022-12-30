import Link from 'next/link';
import React, { ReactElement } from 'react';
import styles from 'styles/Menu.module.scss';

type Props = {
  isMenuVisible: boolean
}

export const Menu: React.FC<Props> = ({ isMenuVisible }): ReactElement => (
  <div className={`${styles.section} ${isMenuVisible && styles.visible}`} >
    <ul className={styles.list} >
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="#" >
          My Account
        </Link>
      </li>
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="#" >
          My Wish List (0)
        </Link>
      </li>
      <li className={styles.listItem} >
        <Link className={styles.menuLink} href="#" >
          Compare(0)
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
)
