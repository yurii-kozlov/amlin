import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import { uuid } from 'uuidv4';
import cn from 'classnames';
import { Article } from 'types/terms/Article';
import { Terms } from 'enums/term';
import arrowTop from 'images/icons/arrowTop.svg';
import arrowDown from 'images/icons/arrowDown.svg';
import styles from 'styles/layout/Terms/TermsNavigation.module.scss';

type TermsNavigationProps = {
  articles: Article[]
}

export const TermsNavigation: React.FC<TermsNavigationProps> = ({ articles }): ReactElement => {
  const [activeAnchor, setActiveAnchor] = useState<Terms | string>(Terms.definitionsAndInterpretation);
  const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(false);

  const handleNavigationVisibility = (): void => setIsNavigationVisible(!isNavigationVisible);

  return (
    <div className={cn(styles.block, styles.blockMarginBottom)} >
      <button
        className={styles.buttonOnMobile}
        onClick={handleNavigationVisibility}
        type="button"
        >
        {activeAnchor}
        {isNavigationVisible ? (
          <Image alt="arrow-top" className={styles.arrow} src={arrowTop} />
        ): (
          <Image alt="arrow-down" className={styles.arrow} src={arrowDown} />
        )}
      </button>
      <nav className={cn(styles.nav,styles.navOnMobile, {[styles.navVisibleOnMobile]: isNavigationVisible})} >
        <ul className={styles.list}>
          {articles.map((article) => (
            <li className={styles.listItem} key={uuid()}>
              <a
                className={cn(
                  styles.anchorLink,
                  {[styles.anchorLinkActive]: activeAnchor === article.subtitle}
                )}
                href={`#${article.subtitle}`}
                onClick={(): void => {
                  setActiveAnchor(article.subtitle);
                  handleNavigationVisibility();
                }}
              >
                {article.subtitle}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
