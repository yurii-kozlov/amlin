import React, { ReactElement } from 'react';
import Link from 'next/link';
import { GetStaticPropsResult } from 'next';
import axios from 'axios';
import { uuid } from 'uuidv4';
import { AboutUs as AboutUsFeatures } from 'types/aboutUs/AboutUs';
import { Main } from 'types/main/Main';
import { MainContainer } from 'components/MainContainer';
import { Container } from 'components/Container';
import { Feature } from 'components/Feature';
import { Reviews } from 'components/Reviews/Reviews';
import styles from 'styles/pages/aboutUs.module.scss';

type AboutUsProps = {
  aboutUsFeatures: AboutUsFeatures,
  main: Main
}

const AboutUs: React.FC<AboutUsProps> = ({ aboutUsFeatures, main }): ReactElement => {
  const {reviews} = main;

  return (
    <MainContainer>
      <section className={styles.section} >
        <Container>
          <nav className={styles.navigation} >
            <Link className={styles.navigationLink} href="/">Home</Link>
            <Link className={styles.navigationLink} href="/aboutUs">About Us</Link>
          </nav>
          <h1 className={styles.title}>About Us</h1>
        </Container>
        <div className={styles.featuresSection} >
          <div className={styles.marginBottom} >
            {aboutUsFeatures.map((feature) => (
              <Feature featureBlock={feature} key={uuid()} />
            ))}
          </div>
          <Reviews reviews={reviews} />
        </div>
      </section>
    </MainContainer>
  );
}

export default AboutUs;

type getStaticPropsReturnMain = {
  aboutUsFeatures: AboutUsFeatures,
  main: Main
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
  const response = await axios.get(`${process.env.BASE_URL}/about-us`);
  const aboutUsFeatures: AboutUsFeatures = response.data;

  const responseMain = await axios.get(`${process.env.BASE_URL}/main`);
  const main = responseMain.data;

  return {
    props: {aboutUsFeatures, main},
  }
}
