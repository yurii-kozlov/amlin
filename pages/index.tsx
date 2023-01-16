import React, { ReactElement } from 'react';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Services } from 'components/Services';
import { News } from 'components/News/News';
import { Logos } from 'components/Logos/Logos';
import { Footer } from 'components/Footer/Footer';
import { Reviews } from 'components/Reviews';
import { BonusSection } from 'components/BonusSection';
import { Main } from 'types/main/Main';
import { GetStaticPropsResult } from 'next';
import { CarouselMain } from 'components/CarouselMain/CarouselMain';

import axios from 'axios';

type HomeProps = {
  mainData: Main
}

export const Home: React.FC<HomeProps> = ({ mainData }): ReactElement => {

  const {banners} = mainData;

  return (
    <>
      <Header />
      <Navbar />
      <CarouselMain banners={banners}/>
      <BonusSection />
      <Logos />
      <News />
      <Reviews />
      <Services />
      <Footer />
    </>
  )
}

type getStaticPropsReturnMain = {
  mainData: Main
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
  const response = await axios.get(`${process.env.BASE_URL}/main`);
  const mainData: Main = response.data;

  return {
    props: {mainData},
  }
}

export default Home;
