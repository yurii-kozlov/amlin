import React, { ReactElement } from 'react';
import Link from 'next/link';
import { GetStaticPropsResult } from 'next';
import { v4 as uuid_v4 } from 'uuid';
import cn from 'classnames';
import { instance } from 'api/api';
import { pagesDescriptions } from 'api/pagesDescriptions';
import { Terms as TermsAndConditions } from 'types/terms/Terms';
import { MainContainer } from 'components/MainContainer';
import { Container } from 'components/Container';
import { TermsBlock } from 'components/Terms/TermsBlock';
import { TermsNavigation } from 'components/Terms/TermsNavigation';
import styles from 'styles/pages/terms.module.scss';

type TermsProps = {
  terms: TermsAndConditions
}

const Terms: React.FC<TermsProps> = ({ terms }): ReactElement => {
  const { heading, title, articles } = terms;

  return (
    <MainContainer pageDescription={pagesDescriptions.terms} title='Terms & Conditions'>
      <Container>
        <section className={cn(styles.section, styles.sectionMarginBottom)} >
          <nav className={styles.navigation} >
            <Link className={styles.navigationLink} href="/">Home</Link>
            <Link className={styles.navigationLink} href="/terms">Terms And Conditions</Link>
          </nav>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.termsAndTermsNavigationWrapper} >
            <article className={styles.terms} >
              <h2 className={styles.title}>{title}</h2>
              {articles.map((article) => (
                <TermsBlock article={article} key={uuid_v4()}/>
              ))}
            </article>
            <div className={styles.termsNavigation}>
              <TermsNavigation articles={articles}/>
            </div>
          </div>
        </section>
      </Container>
    </MainContainer>
  );
}

export default Terms;

type getStaticPropsReturnTerms = {
  terms: TermsAndConditions
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnTerms>> {
  const response = await instance.get('/terms');
  const terms: TermsAndConditions = response.data;

  return {
    props: {terms},
  }
}
