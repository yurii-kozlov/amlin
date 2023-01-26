import React, { ReactElement } from 'react';
import styles from 'styles/layout/AboutProduct/AdditionalBrandInfo.module.scss';
import classes from 'styles/base/container.module.scss';
import { additionalBrandInfo } from 'api/additionalBrandInfo';
import cn from 'classnames';
import Link from 'next/link';
import intel from 'images/icons/productFeatures/intel.svg';
import geforceRTX from 'images/icons/productFeatures/geforceRTX.svg';
import gen3SSD from 'images/icons/productFeatures/gen3SSD.svg';
import ddr4Processor from 'images/icons/productFeatures/ddr4Processor.svg';
import Image from 'next/image';

const { mainDescription, additionalDescription} = additionalBrandInfo.spec

export const AdditionalBrandInfo: React.FC = (): ReactElement => (
  <section className={styles.section}>
    <div className={styles.specs}>
      <div className={cn(classes.container)}>
        <div className={styles.AdditionalContainerOnDesktop} >
          <div className={styles.specsDescription} >
            <h1 className={styles.title}>Outplay the<br />
              Competition
            </h1>
            <p className={cn(styles.descriptionText, styles.mainDescription)}>{mainDescription}</p>
            <p className={cn(styles.descriptionText, styles.additionalDescription)}>{additionalDescription}</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.additionalServices}>
      <div className={classes.container} >
        <ul className={styles.linkList} >
          <li className={styles.listListItem}>
            <Link className={styles.additionalServicesLink} href="#">
              Product Support
              <span className={styles.arrowRight} />
            </Link>
          </li>
          <li className={styles.listListItem}>
            <Link className={styles.additionalServicesLink} href="#">
              FAQ
              <span className={styles.arrowRight} />
            </Link>

          </li>
          <li className={styles.listListItem}>
            <Link className={styles.additionalServicesLink} href="#">
              Our Buyer Guide
              <span className={styles.arrowRight} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.features}>
      <div className={classes.container} >
        <h1 className={styles.featuresTitle}>Features</h1>
        <p className={styles.brandDescription}>
          The MPG series brings out the best in gamers by allowing full expression in color with advanced
          RGB lighting control and synchronization.
        </p>
        <ul className={styles.featuresList}>
          <li className={styles.featuresListItem}>
            <div className={styles.featureBlock} >
              <Image alt="intel" className={styles.featureImage} src={intel}/>
              <p className={styles.featureDescription}>
                <strong>Intel® Core™ i7</strong> processor with the upmost computing power to bring
                you an unparalleled gaming experience.
              </p>
            </div>
          </li>
          <li className={styles.featuresListItem}>
            <div className={styles.featureBlock} >
              <Image alt="geforceRTX" className={styles.featureImage} src={geforceRTX} />
              <p className={styles.featureDescription}>
                <strong>The new GeForce® RTX SUPER™</strong> Series has more cores and higher clocks
                for superfast performance compared to previous-gen GPUs.
              </p>
            </div>
          </li>
          <li className={styles.featuresListItem}>
            <div className={styles.featureBlock} >
              <Image alt="gen3SSD" className={styles.featureImage} src={gen3SSD} />
              <p className={styles.featureDescription}>
                Unleash the full potential with the latest  <strong>SSD technology</strong>,
                the NVM Express. 6 times faster than traditional SATA SSD.
              </p>
            </div>
          </li>
          <li className={styles.featuresListItem}>
            <div className={styles.featureBlock} >
              <Image alt="ddr3Processor" className={styles.featureImage} src={ddr4Processor} />
              <p className={styles.featureDescription}>
                Featuring the latest <strong>10th Gen Intel® Core™</strong> processors, memory can support
                up to DDR4 2933MHz to delivers an unprecedented gaming experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
