import React, { ReactElement } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { Feature as FeatureBlock } from 'types/aboutUs/Feature';
import { icons } from 'constants/icons';
import { Container } from 'components/Container';
import styles from 'styles/layout/Feature.module.scss';

type FeatureProps = {
  featureBlock: FeatureBlock
}

export const Feature: React.FC<FeatureProps> = ({ featureBlock }): ReactElement => {
  const {img, title, text, color, icon } = featureBlock;

  return (
    <div className={cn(
      styles[`backgroundColor${color}`],
    )}
    >
      <img
        alt={title}
        className={cn(styles.blockImage, styles.blockImageVisibleOnMobile)}
        src={img}
      />
      <Container>
        <div className={styles.additionalContainerOnTabletAndDesktop} >
          <div className={cn(
            styles.block,
            styles[`block${color}`]
          )}
          >
            <div className={styles.blockDescriptionAndTitleWrapper} >
              {icon !== icons.none && <Image alt={icon} className={styles.icon} src={icons[icon]}/>}
              <h2 className={cn(
                styles.blockTitle,
                styles[`blockTitleColor${color}`]
              )}
              >
                {title}
              </h2>
              <p className={cn(
                styles.description,
                styles[`descriptionColor${color}`]
              )}
              >
                {text}
              </p>
            </div>
            <img
              alt={title}
              className={styles.blockImage}
              src={img}
            />
          </div>
        </div>
      </Container>
    </div>
  )
};
