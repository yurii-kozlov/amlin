import React, { ReactElement } from 'react';
import cn from 'classnames';
import { Article } from 'types/terms/Article';
import styles from 'styles/layout/Terms/TermsBlock.module.scss';

type TermsBlockProps = {
  article: Article
}

export const TermsBlock: React.FC<TermsBlockProps> = ({ article }): ReactElement => {
  const { subtitle, text } = article;

  return (
    <article className={cn(styles.article, styles.marginBottom)} id={subtitle} >
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
