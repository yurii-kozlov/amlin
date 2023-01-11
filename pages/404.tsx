import React, { ReactElement } from 'react';
import styles from 'styles/layout/error.module.scss';
import Link from 'next/link';

const Error: React.FC = (): ReactElement => (
  <section className={styles.section} >
    <h1 className={styles.errorDescription} >This Page hasn&apos;t been found.</h1>
    <p className={styles.instruction} >
      Please go back to <Link className={styles.homePageLink} href="/">safety</Link>
    </p>
  </section>
);


export default Error;
