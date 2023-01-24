import React, { ReactElement } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { Feature as FeatureBlock } from 'types/aboutUs/Feature';
import { Icons } from 'enums/icons';
import { FeaturesBlocks } from 'enums/featuresBlocks';
import { getTheRightIcon } from 'helpers/getTheRightIcon';
import { Container } from 'components/Container';
import styles from 'styles/layout/Feature.module.scss';

type FeatureProps = {
  featureBlock: FeatureBlock
}

export const Feature: React.FC<FeatureProps> = ({ featureBlock }): ReactElement => {
  const {img, title, text, background, icon } = featureBlock;

  return (
    <div className={cn(
      {[styles.backgroundColorDark]: background === FeaturesBlocks.dark},
      {[styles.backgroundColorLight] : background === FeaturesBlocks.light}
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
            {[styles.darkBlock] : background === FeaturesBlocks.dark},
            {[styles.lightBlock] : background === FeaturesBlocks.light}
          )}
          >
            <div className={styles.blockDescriptionAndTitleWrapper} >
              { icon !== Icons.none && <Image alt={icon} className={styles.icon} src={getTheRightIcon(icon)}/>}
              <h2 className={cn(
                styles.blockTitle,
                {[styles.blockTitleColorDark]: background === FeaturesBlocks.light},
                {[styles.blockTitleColorLight]: background === FeaturesBlocks.dark}
              )}
              >
                {title}
              </h2>
              <p className={cn(
                styles.description,
                {[styles.descriptionColorDark]: background === FeaturesBlocks.light},
                {[styles.descriptionColorLight]: background === FeaturesBlocks.dark}
              )}
              >
                {text}
              </p>
            </div>
            <img
              alt={title}
              className={cn(styles.blockImage, styles.blockImageInvisibleOnMobile)}
              src={img}
            />
          </div>
        </div>
      </Container>
    </div>
  )
};
