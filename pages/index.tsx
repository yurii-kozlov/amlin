import React, { ReactElement } from 'react';
import axios from 'axios';
import { GetStaticPropsResult } from 'next';
import { Main } from 'types/main/Main';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Services } from 'components/Services';
import { News } from 'components/News/News';
import { Logos } from 'components/Logos/Logos';
import { Footer } from 'components/Footer/Footer';
import { BonusSection } from 'components/BonusSection';
import { CarouselMain } from 'components/CarouselMain/CarouselMain';
import { Reviews } from 'components/Reviews/Reviews';
import { NewProducts } from 'components/NewProducts/NewProducts';



type HomeProps = {
  mainData: Main
}

export const Home: React.FC<HomeProps> = ({ mainData }): ReactElement => {

  const {banners, reviews, newProducts} = mainData;

  return (
    <>
      <Header />
      <Navbar />
      <CarouselMain banners={banners}/>
      <NewProducts newGoods={newProducts}/>
      <BonusSection />
      <Logos />
      <News />
      <Reviews reviews={reviews} />
      <Services />
      <Footer />
    </>
  )
}

type getStaticPropsReturnMain = {
  mainData: Main
}

export async function getStaticProps(): Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
  const response = await axios.get(`${process.env.BASE_URL}/main`);
  const mainData: Main = response.data;

  return {
    props: {mainData},
  }
}

export default Home;
