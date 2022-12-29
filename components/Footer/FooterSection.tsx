import React, { ReactElement, useState } from 'react';
import styles from 'styles/layout/Footer/FooterSection.module.scss';
import { footerBlock } from 'types/footerBlock';
import Link from 'next/link';
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import Image from 'next/image';

type Props = {
  section: footerBlock
}

export const FooterSection:React.FC<Props> = ({ section }):ReactElement => {
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
          <Image alt="arrowTop" className={styles.arrow} src={arrowTop} />
        ): (
          <Image alt="arrowBottom" className={styles.arrow} src={arrowDown} />
        )}


      </a>
      <ul className={`${styles.list} ${areListsVisible && styles.listsVisible}`} >
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
