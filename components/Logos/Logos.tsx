import React, { ReactElement, useRef } from 'react';
import { logosLinksImages } from 'api/logosLinksImages';
import { useOnScreen } from 'hooks/useOnScreen';
import { LogoBlock } from 'components/Logos/LogoBlock';
import { Container } from 'components/Container';
import styles from 'styles/layout/Logos.module.scss';

export const Logos: React.FC = (): ReactElement => {
  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '150px');

  return (
    <Container>
      <div className={styles.section} ref={ref} >
        {onScreen && logosLinksImages.map((image) => (
          <LogoBlock
            key={`logo-id-${image.id}`}
            logo={image}
          />
       ))}
      </div>
    </Container>
  );
}
