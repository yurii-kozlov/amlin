import React, { ReactElement, useState } from 'react';
import styles from 'styles/layout/Footer/FooterSection.module.scss';
import { footerBlock } from 'types/footerBlock';
import { arrows } from 'api/logosLinksImages';
import Link from 'next/link';
import cn from 'classnames';

type FooterSectionProps = {
  section: footerBlock
}

export const FooterSection:React.FC<FooterSectionProps> = ({ section }):ReactElement => {
  const { title, sections } = section
  const [areListsVisible, setAreListsVisible ] = useState<boolean>(false);

  const showList = (): void => setAreListsVisible(!areListsVisible);

  return (
    <div className={styles.block}>
      <a
        className={styles.openingLink}
        href="#showList"
        onClick={showList}
        >
        <h5 className={styles.blockTitle}>{title}</h5>
        {areListsVisible ? (
          <img alt="arrowTop" className={styles.arrow} src={arrows.arrowTop} />
        ): (
          <img alt="arrowBottom" className={styles.arrow} src={arrows.arrowBottom} />
        )}


      </a>
      <ul className={cn(styles.list, {[styles.listsVisible]: areListsVisible})} >
        {sections.map((sectionInfo) => (
          <li
            className={styles.listItem}
            key={sectionInfo.id}
            >
            <Link className={styles.link} href={sectionInfo.link}>
              {sectionInfo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
