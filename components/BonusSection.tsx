import Link from 'next/link';
import React, { ReactElement, useRef } from 'react';
import Image from 'next/image';
import { Container } from 'components/Container';
import zipLogo from 'images/icons/zipLogo.svg';
import styles from 'styles/layout/BonusSection.module.scss';
import { useOnScreen } from 'hooks/useOnScreen';

export const BonusSection: React.FC = (): ReactElement => {

  const ref: any = useRef<HTMLElement>();
  const onScreen: boolean = useOnScreen<HTMLElement>(ref, '150px');

  return (
    <Container >
      <section className={styles.section} data-testid="bonusSection" ref={ref}>
        {onScreen && (
          <>
            <Image
              alt='zip-logo'
              className={styles.logo}
              src={zipLogo}
                />
            <p className={styles.description}><strong>own</strong> it now, up to 6 months interest free
            </p>
            <Link className={styles.moreInfoLink} href="#">learn more</Link>
          </>
        )}
      </section>
    </Container>
  );
}
